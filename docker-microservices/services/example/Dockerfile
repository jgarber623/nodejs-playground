FROM node:15.10.0-alpine3.13

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

VOLUME /usr/src/app/node_modules

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-optional

COPY . .
