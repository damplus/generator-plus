#!/bin/sh

set -eo pipefail

repo=~/Desktop/repo

cd /Users/cdevereux/Tools/generator-pluskit

npm run build
rm -rf $repo/packages
mkdir -p $repo/packages

rm -rf $repo/node_modules/generator-pluskit
cp -r generators $repo/node_modules/generator-pluskit

cd $repo
yo pluskit:component
