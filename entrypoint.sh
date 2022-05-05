#!/bin/sh -l

cd web
npm install
npm test

apk --no-cache add curl
curl -Os https://uploader.codecov.io/latest/linux/codecov
chmod +x codecov
./codecov -s ./coverage -R ./..
