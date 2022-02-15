# pull official base image
FROM node:alpine
ENV NODE_ENV development
#this will be the working directory for your application
WORKDIR /app
# Reference for installing all app dependencies
COPY package.json .
# for install dependencies
RUN npm install
# Bundle app source
COPY . .
# port to run on
EXPOSE 3000
# command to start the client server
CMD ["npm","start"]