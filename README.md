# Deploy

## Prepare

Copy files .env.example and rename them just .env in root and client directories respectively

You should use node v 16

Switch to directory server and execute npm install
Switch to directory client and execute npm install

# Develop

    docker-compose up

    After build and create containers application should be available on http://localhost:3050

# Prod
    docker-compose -f docker-compose.prod.yml -f docker-compose.letsencrypt.yml -f docker-compose.metrics.yml up -d

# tests

In order to execute tests you should know docker containers id for api and client servises

Execute docker ps to see container's info

To execute tests:
docker exec -it containerId npm test
 