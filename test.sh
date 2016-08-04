#!/bin/sh

set -eo pipefail

repo=~/Desktop/repo
component=$repo/packages/component

cd /Users/cdevereux/Tools/generator-pluskit

npm run build
rm -rf $component
mkdir -p $repo/node_modules
mkdir -p $repo/packages

cp -r node_modules $repo
cp -r generators $repo/node_modules/generator-pluskit

cd $repo
yo pluskit:component foo
