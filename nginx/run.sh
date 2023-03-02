#!/bin/bash
docker stop nginx && docker rm nginx
docker run -d \
    --privileged \
    --name nginx \
    nginx
docker logs -f nginx