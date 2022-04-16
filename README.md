# ReedMe

## Prepare

Copy files .env.example and rename them just .env in root and client directories respectively

You should use node v 16


Switch to directory server and execute npm install

Switch to directory client and execute npm install

# Develop

    docker-compose up

    After build and create containers application should be available on http://localhost:3050

    If error about node-sass will apppear run

    docker exec -it video-upload-client npm rebuild node-sass

    and restart 

    docker-compose up

# Prod
    docker-compose -f docker-compose.prod.yml up -d

# tests

To execute tests run

docker exec -it video-upload-client npm test

docker exec -it video-upload-api npm test
 