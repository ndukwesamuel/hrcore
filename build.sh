#!/usr/bin/env bash

echo "Updating project from $BUILD_ENV ..."

git pull origin $BUILD_ENV

echo "copying env file..."
cp ../../config/.env-hrcore-fe .env
cp ../../config/.eslintrc.json .eslintrc.json

echo "starting container..."
docker-compose -f docker-compose-server.yml up --build -d

echo "done."

