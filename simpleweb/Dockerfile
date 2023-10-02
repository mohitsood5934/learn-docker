# Specify a base image 
FROM node:14-alpine

# if this folder will not exist then docker will automatically create for us
WORKDIR /usr/app

# COPY ./ ./ , not copying here as we need to install dependencies only if package.json got changed
COPY ./package.json ./
# install some dependencies
RUN npm install

COPY ./ ./

# Default commands
CMD ["npm","start"]