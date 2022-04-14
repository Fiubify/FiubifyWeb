#!/bin/sh -l

docker build -t fiubify-test .
docker container run fiubify-test