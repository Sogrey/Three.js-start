#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e


git init
git add -A
git commit -m 'deploy master'

# �������Ҫ���� https://USERNAME.github.io
git push -f https://github.com/Sogrey/Three.js-start.git master

cd -