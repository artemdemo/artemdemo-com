#!/bin/sh

git checkout master
git checkout -b master_tmp
rm .gitignore
git add public/\*
git add .gitignore
git commit -m "Build blog"
git subtree split --prefix public -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages          # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages                        # delete the local gh-pages because you will need it: ref
git checkout master
git branch -D master_tmp