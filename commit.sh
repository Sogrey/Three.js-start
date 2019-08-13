#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f https://github.com/Sogrey/Three.js-start.git master

cd -