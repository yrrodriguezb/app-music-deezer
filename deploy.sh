#!/usr/bin/env sh

echo "Ingresar datos de su repositorio de gitgub"
echo -n "Nombre de usuario: " 
read usuario
echo -n "Repositorio: " 
read repo


# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# ssh: git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
command="git push -f https://github.com/"$usuario"/"$repo".git master:gh-pages"
eval $command

cd -