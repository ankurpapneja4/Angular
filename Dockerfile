FROM node:20.5.1
WORKDIR /app
RUN npm install -g @angular/cli@latest
EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--poll", "500", "--watch" ]