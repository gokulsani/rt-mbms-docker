FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/
WORKDIR /
EXPOSE 80
ENTRYPOINT [ "./docker-entrypoint.sh", "nginx-debug" ]