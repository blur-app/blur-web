# base image
FROM node:8

# set working directory
WORKDIR /usr/src/app
COPY package*.json ./

COPY . .

RUN yarn install
RUN yarn build

# start app
EXPOSE 8080
CMD yarn prod