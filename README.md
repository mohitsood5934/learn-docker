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

  ```
  FROM alpine

  RUN npm install

  CMD ["npm","start"]
  ```

# COPY Command
  COPY ./ ./

  COPY <path to folder to copy from your own machine relative to build context> <place to copy stuff inside the container>

# Tagging an image
docker build -t msood123/simpleweb .
# Container Port Mapping
When we are running our application in container , then we have to map our port in the node to the container

- Anytime someone make request to a port on your local network, take that request and pass that request to some port inside the container

- docker container can also make request to the outside world

- for port mapping we need to make  change to our docker run command

 **** Docker run with port mapping *****

 docker run -p      8080           :                                         8080 <imageId>/<imagename>
                    route incoming requests to this port on localhost to       this port is
                                                                            inside the container

any local traffic to local host will diverted to 8080 port inside the container

# Specifying a working directory

docker run -it msood123/simpleweb sh -> this command will open an interactive shell inside the container

-it -> instructs the docker to allocate a pseudo tty connected to container's STDIN,
creating an interactive bash shell in the container 

WORKDIR   /usr/app

Any following command will be executed relative to the path in the container

COPY will not happen on the path relative to the working directory as now we are specifying the
working directory .

```
docker exec -it <containerid> sh
```

- whenever we will change any server file , then we need to  rebuild the docker container

# Minimizing cache busting & rebuilds
Order of commands matters when you are writing a docker file .
How you are writing this commands & in which order helps in minimi


# User of Docker Compose 


# Multi Step Docker Builds

# Build Phase
- use node:alpine
- copy the package.json file
- install dependencies
- RUN npm run build

 - result of this build process will be main.js file & index.html file

# Run Phase
- use nginx
- copy over the result of 'npm run build'
- start nginx

Here make a note that when we are copying over the result of 'npm run build' we are only taking the build folder i.e index.html and main.js file and all other dependencies and folders are left there as they are not needed .This will help us to decrease the bundle size

- running file : docker build .
docker run -p 8080:80 <imageid>

80 is default port for nginx

