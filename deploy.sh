#!/usr/bin/env sh

# abort on errors
set -e

# install
npm install

# build
npm run build

# navigate into the build output directory
cd gh-pages

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'anthonygreco.xyz' > CNAME


git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:anthfgreco/personal-portfolio-v2.git main:gh-pages 

cd -