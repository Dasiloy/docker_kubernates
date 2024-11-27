### to create a container from an image
docker create <image-name>

### To run an existing container
docker start -a <container-id> // watch for output from container and print it out on terminal
docker start <container-id>


###  to run a new container from an image
docker run <image-name>
docker run <image-name> <override default command>

### List Al running containers on your machine
docker ps
docker ps --all

### Delete and clear out all containers
docker system prune

### log container 
docker logs <container-id>

### kill command
docker stop <container-id> ==>  system stops by cleaning up
docker kill <container-id> ==> hard kill

### multi-command 
docker exec -it <container-id> <command>

### give container terminal access
docker exec -it <container-id> sh
docker run -it <image-name>

### build command with verbose output
docker build --progress=plain
docker build --no-cache --progress=plain

### tag docker images
docker build -t <docker-id>/<project-name>:latest
docker tag <container-id> <tag-name>

### run and stop docker containers using docker compose
docker-compose up -d
docker-compose down