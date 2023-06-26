#!/usr/bin/env sh

if [ $NODE_ENV = 'development' ] ; then
  yarn install
  yarn start
else
  yarn install --production --frozen-lockfile
  yarn run build && serve -s build -l $PORT
fi