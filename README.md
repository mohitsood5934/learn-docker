# learn-docker

# running nodejs web app inside container

- Create a NodeJs web app
- Create a docker file
- Build image from docker file
- Run image as a container
- Connect to web app from browser


# Buildkit
As buildkit will hide away much of its progress which legacy builder did not do . Use - 

docker build --progress=plain , it will show you progress

# Image Creation Steps
  - Specify a base image
  - Run some commands to install additional Programs 
  - Specify a command to run a container setup

  ```FROM alpine

  RUN npm install

  CMD ["npm","start"]```