#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

echo -e "\033[32;40m [1] \033[0m commit 2 master branch"

git init
git add -A
git commit -m 'deploy master'

# �������Ҫ���� https://USERNAME.github.io
git push -f https://github.com/Sogrey/Three.js-start.git master

echo -e "\033[32;40m [2] \033[0m Generate static files"

# ���ɾ�̬�ļ�
gitbook build

# �������ɵ��ļ���
cd _book

# ����Ƿ������Զ�������
# echo 'www.yourwebsite.com' > CNAME
echo "" >> .gitignore
echo "commit.sh" >> .gitignore
echo "deploy.sh" >> .gitignore

git config --local http.postBuffer 524288000

echo -e "\033[32;40m [3] \033[0m commit 2 gh-pages branch"

git init
git add -A
git commit -m 'deploy gh-pages'

# �������Ҫ���� https://USERNAME.github.io
git push -f https://github.com/Sogrey/Three.js-start.git master:gh-pages

cd -