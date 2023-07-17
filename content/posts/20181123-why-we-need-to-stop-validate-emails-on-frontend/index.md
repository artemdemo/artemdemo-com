---
title: Why we need to stop validating emails at the frontend
date: '2018-11-23T20:27:20.100Z'
tags: ['email', 'validation', 'regex']
---

Let's talk about one of the most well-known features of the web - registration.
Not particularly the whole process, but in particular one aspect, email.
For almost anything on the web, we need an email: ordering goods, registering for a service,
receiving notifications, etc. It's logical that if we need emails so much,
then we'll need to somehow be sure that the user has provided a correct one.

Ok, let's do a quick search on the Internet and see what are the front-end solutions for email validation.
We'll quickly find the most popular [stackoverflow answer](https://stackoverflow.com/a/46181) for this problem.
It uses some complex regular expressions for this task and even takes into account Unicode,
hence email nowadays can be written in any language as well as English.
This is a good start, but it doesn't take into account all cases of email specification.

Have you actually tried to read a complete definition of what an email can be?
Trust me, there are some surprises :) Let's see some examples.
Here is a list of different email addresses, which one is valid?

- mail"hello@there"@mail.com
- user+mailbox/department=shipping@example.com
- mail"(hi)"@mail.com
- 用户@例子.广告
- mail@dimainname
- mail@somedomain.com

Well, most people will say that only the last one is valid.
But in fact, that’s not true. Every email in the list is valid according to the definition.
Obviously, someone with email mail@dimainname will have a hard time trying to register to any service,
but it doesn't mean that his email isn't valid. By the way, Chrome, and other browsers will validate exactly that,
when you use the built-in validation for email. You can test it in [this example](https://jsbin.com/varilim/edit?js,output).

The next logical question is: could we use the full validation for email?
Actually, we could, you can find it easily [here](https://www.regular-expressions.info/email.html) or
[here](https://emailregex.com/).
The problem is that it's actually useless.

Let's face it - usually, the problem lies not in hardcore emails, like, mail"hello@there"@mail.com,
as obviously, no-one uses it. So let's take a step back and try to redefine the problem.
Why do we actually need an email validation? What are we trying to solve?

Can we prevent users from entering a false email? No, we can't, if the user wants to,
he could just enter something like noname@wtf.com and it will pass any regex validation.
Actually, if we want to check whether an address is 100% valid,
then we need to send an email to the given address and then we'll see.
This is the only way, and obviously, we can't do this kind of validation in the browser.

So instead of trying to find out whether a user is trying to use an incorrect email,
we'll try to help him to write his email.
Usually, users just misspell their own email and we can just test for common mistakes and that's it.
So what are the mistakes:

- Adding a character after a dot, by typing on one of the buttons nearby.
- Check that the user used @ in the email
- No white spaces
- Take into account the option that the email could have Unicode symbols

This is it, the rest is the server’s problem and even the server will only need to send an email to the given address
and then check whether it returns an error. This is the only validation.

So what could be the regex validation at the frontend, given the list of constraints I mentioned before?
This is an example of such a regex:

```javascript
^\S.+@[^@\s\/\\,;":'|<>]+[^.]\.[^@\s\/\\,.;":'|<>]+$
```

I'm not saying that it's perfect, but I think it could be a step in the right direction.
By the way, if you find a way to improve it, then [write to me about it](https://artemdemo.com/contact),
I want to discuss this.
