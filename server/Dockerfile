#The first thing we need to do is define from what image we want to build from. Using node version app was build in
FROM node:14
#this will be the working directory for your application
WORKDIR /app
# Reference for installing all app dependencies
COPY package.json ./
# for install dependencies
RUN yarn
# Bundle app source
COPY . .
# port to run on
EXPOSE 8080
# script that will run on server
CMD ["node","app.ts"]

