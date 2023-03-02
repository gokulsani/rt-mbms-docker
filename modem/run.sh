#!/bin/bash
docker stop modem && docker rm modem
docker run -d --rm \
    --device /dev/net/tun:/dev/net/tun \
    --device /var/run/smcroute.sock:/var/run/smcroute.sock \
    --device /dev/bus/usb:/dev/bus/usb \
    -v /var/run/dbus:/var/run/dbus \
    -v /var/run/avahi-daemon/socket:/var/run/avahi-daemon/socket \
    --volume /home/ors/Downloads:/var/data \
    --privileged \
    --name modem \
    modem
docker logs -f modem
#/usr/bin/modem -f /var/data/3MHz_MCS16_1kHz25_RTP_3.5.raw
#/usr/bin/modem -f /var/data/3MHz_MCS16_1kHz25_HLS_q6a.raw

#    --device /dev/net/tun:/dev/net/tun \
#    --device /var/run/smcroute.sock:/var/run/smcroute.sock \ 