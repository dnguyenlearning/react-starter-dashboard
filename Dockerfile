FROM ubuntu:latest

RUN apt-get update

MAINTAINER phuduong290392@gmail.com

RUN apt-get install -y nginx nodejs

RUN rm -v /etc/nginx/nginx.conf

ADD nginx.conf /etc/nginx/

ADD dist /usr/share/nginx/html/

ADD dist /var/www/html/

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 90

CMD service nginx start