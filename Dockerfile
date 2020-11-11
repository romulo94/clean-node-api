FROM node:14.13
WORKDIR /usr/src/clean-node-api
COPY package.json .
RUN npm install --only=prod