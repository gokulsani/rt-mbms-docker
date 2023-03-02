#!/bin/bash
docker stop mbms-mw && docker rm mbms-mw
docker run -d \
    --name mbms-mw \
    --privileged \
    mbms-middleware
docker logs -f mbms-mw