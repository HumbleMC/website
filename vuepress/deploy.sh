#!/usr/bin/env sh

set -e

yarn docs:build

cd ../docs

echo 'humblemc.enaium.cn' > CNAME

git add -A
git commit -m 'deploy'