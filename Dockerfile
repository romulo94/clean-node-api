FROM node:14.15
WORKDIR /usr/src/clean-node-api
COPY package.json .
RUN yarn --production