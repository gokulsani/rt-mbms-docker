#!/bin/bash
docker stop wui && docker rm wui
docker run -it --rm \
    --privileged \
    --name wui \
    wui /bin/bash
docker logs -f wui