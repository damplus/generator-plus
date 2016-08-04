#!/bin/sh

set -eo pipefail

rm -rf generators
mkdir -p generators

tsc

for f in $(ls src)
do
  cp -r "src/$f/templates" "generators/$f"
done
