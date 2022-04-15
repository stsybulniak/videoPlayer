FROM node:16.14.2-alpine AS node

WORKDIR '/app'

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

RUN apk update
RUN apk add
RUN apk add ffmpeg

COPY . .

CMD ["npm", "run", "start:prod"]
