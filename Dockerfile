FROM nginx:alpine

COPY ./src/.vuepress/dist/ /usr/share/nginx/html/
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80