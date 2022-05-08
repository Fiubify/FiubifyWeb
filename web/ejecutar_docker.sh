#!/bin/sh -l

docker build -t fiubify-web .
docker run -p 3000:3000 fiubify-web 