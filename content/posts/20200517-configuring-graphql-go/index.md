---
title: Configuring graphql-go/graphql
date: '2020-05-17T19:30:00.000Z'
tags: ['golang', 'graphql', 'graphql-go']
---

It's not that hard to use graphql with go, but it could take some effort to find all the gotchas. Therefore let's save some time and talk about some configuration of graphql in Golang.

In this tutorial I'll use [graphql-go/graphql](https://github.com/graphql-go/graphql) library, version v0.7.9

<!-- end -->

Somehow for this library there are only a few examples of schema type definitions. And almost no example of somehow sophisticated scenarios. So you'll need to spend some time diggin the internet in order to find a solution to your case. Here I want to share some examples.

First of all you'll need to handle routing in order to receive graphql requests:

```go
import "net/http"

http.Handle("/graphql", services.CorsMiddleware(controllers.GraphqlHandler()))
```

`CorsMiddleware` will do 2 things

1. Allow CORS (or not, you can change it in your implementation)
1. Handle OPTIONS request of the browser

```go
func EnableCors(w http.ResponseWriter, r *http.Request) {
    Logger.Printf("Enabling CORS (%s)", r.Method)
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    w.Header().Set("Access-Control-Allow-Methods", "GET, POST,OPTIONS")
    if r.Method == "OPTIONS" {
        w.WriteHeader(http.StatusOK)
        return
    }
}

func CorsMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        EnableCors(w, r)

        // If the request method is OPTIONS,
        // then I don't want to process the body or send back a response.
        // In this case I will not continue to the next handler.
        if r.Method != "OPTIONS" {
            next.ServeHTTP(w,r)
        }
    })
}
```

In the same service I also have handy function to response with json:

```go
func ResponseJson(jsonStructData interface{}, w http.ResponseWriter) error {
    jsonResponse, err := json.Marshal(jsonStructData)
    if err != nil {
        return err
    }
    w.Header().Set("Content-Type", "application/json")
    if _, err := w.Write(jsonResponse); err != nil {
        return err
    }
    return nil
}
```

Now, the `graphqlCtrl` controller. Here I need to process the body from the request and deal with the query:

```go
func GraphqlHandler() http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        if r.Body == nil {
            http.Error(w, "No query data", 400)
            return
        }

        var rBody models.GraphqlReqBody
        var err error
        err = json.NewDecoder(r.Body).Decode(&rBody)
        if err == nil {
            graphqlData := models.ProcessGqlQuery(rBody.Query, rBody.Variables)
            if graphqlData.Errors != nil {
                w.WriteHeader(http.StatusBadRequest)
            }
            err = services.ResponseJson(
                graphqlData,
                w,
            )
        }

        if err != nil {
            services.LoggerE.Print(err.Error())
            http.Error(w, "Something went wrong", http.StatusInternalServerError)
        }
    })
}
```

Now I need to deal with the query. For this specific purpose I have the `ProcessGqlQuery` function, but first I need to define a general struct for the graphql request body:

```go
type GraphqlReqBody struct {
    Query string `json:"query"`
    OperationName string `json:"operationName"`
    Variables map[string]interface{} `json:"variables"`
}
```

Now defining the start of the query processing:

```go
func ProcessGqlQuery(query string, variables map[string]interface{}) *graphql.Result {
    retrieveTransactions := RetrieveTransactionsFromFile()

    result := graphql.Do(
        graphql.Params{
            Schema: gqlSchema(retrieveTransactions),
            RequestString: query,
            VariableValues: variables,
        },
    )
    if len(result.Errors) > 0 {
        services.LoggerE.Printf(
            "failed to execute graphql operation, errors: %+v",
            result.Errors,
        )
    }

    return result
}
```

I will not explain here how `RetrieveTransactionsFromFile()` works. It's not important for the overall example. Far more interesting to define the schema.

```go
func gqlSchema(queryTransactions func() []services.Transaction) graphql.Schema {
    queryFields := graphql.Fields{
        "transactions": &graphql.Field{
            Type:        graphql.NewList(hqlTransactionType),
            Description: "Transactions list",
            Args: graphql.FieldConfigArgument{
                "accountFrom": &graphql.ArgumentConfig{
                    Type: graphql.String,
                },
                "accountTo": &graphql.ArgumentConfig{
                    Type: graphql.String,
                },
                "dateRange": &graphql.ArgumentConfig{
                    Type: graphql.NewInputObject(graphql.InputObjectConfig{
                        Name: "DateRangeInput",
                        Fields: graphql.InputObjectConfigFieldMap{
                            "gt": &graphql.InputObjectFieldConfig{
                                Type: graphql.String,
                            },
                            "lt": &graphql.InputObjectFieldConfig{
                                Type: graphql.String,
                            },
                        },
                    }),
                },
            },
            Resolve: func(params graphql.ResolveParams) (interface{}, error) {
                transactions := queryTransactions()
                transactions = services.FilterByDateRange(params.Args["dateRange"], transactions)
                transactions = services.FilterByFromAccount(params.Args["accountFrom"], transactions)
                transactions = services.FilterByToAccount(params.Args["accountTo"], transactions)
                services.Logger.Printf("After filter left %d transactions", len(transactions))
                return transactions, nil
            },
        },
    }

    schemaConfig := graphql.SchemaConfig{
        Query: graphql.NewObject(
            graphql.ObjectConfig{
                Name: "Query",
                Fields: queryFields,
            },
        ),
    }
    schema, err := graphql.NewSchema(schemaConfig)
    if err != nil {
        services.LoggerE.Printf("failed to create new schema, error: %v", err)
    }
    return schema
}
```

Again, filtering methods `FilterByDateRange`, `FilterByFromAccount` and `FilterByToAccount` are not important here. What is left to do is to define transaction type:

```go

var hqlTransactionType = graphql.NewObject(
    graphql.ObjectConfig{
        Name: "Transaction",
        Fields: graphql.Fields{
            "id": &graphql.Field{
                Type: graphql.String,
            },
            "date": &graphql.Field{
                Type: graphql.String,
            },
            "transactionType": &graphql.Field{
                Type: graphql.String,
            },
            "accountFrom": &graphql.Field{
                Type: graphql.String,
            },
            "amountInAccountFromCoin": &graphql.Field{
                Type: graphql.Float,
            },
            "accountFromCoin": &graphql.Field{
                Type: graphql.String,
            },
            "accountTo": &graphql.Field{
                Type: graphql.String,
            },
            "amountInAccountToCoin": &graphql.Field{
                Type: graphql.Float,
            },
            "accountToCoin": &graphql.Field{
                Type: graphql.String,
            },
            "amountInDefaultCoin": &graphql.Field{
                Type: graphql.Float,
            },
            "exchangeRate": &graphql.Field{
                Type: graphql.Float,
            },
            "defaultCoin": &graphql.Field{
                Type: graphql.String,
            },
            "tags": &graphql.Field{
                Type: graphql.NewList(graphql.String),
            },
            "comments": &graphql.Field{
                Type: graphql.String,
            },
            "category": &graphql.Field{
                Type: graphql.String,
            },
            "rootCategory": &graphql.Field{
                Type: graphql.String,
            },
        },
    },
)
```
