#!/bin/sh

handleError () {
    if [ $1 != 0 ]; then
       echo "[deploy.sh] Error, occurred, exiting script"
       exit 1
    fi
}

echo "[deploy.sh] testing code"
npm run test
handleError $?

echo ""
echo "[deploy.sh] building code"
npm run build
handleError $?

echo ""
echo "[deploy.sh] starting deployment"
git checkout master
git checkout -b master_tmp
rm .gitignore
git add public/\*
git add .gitignore
git commit -m "Build blog"
git subtree split --prefix public -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages                   # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages                        # delete the local gh-pages because you will need it: ref
git checkout master
git branch -D master_tmp
