FROM node:20-alpine

WORKDIR /usr/src/app

RUN yarn global add @nestjs/cli

COPY . .

COPY .env.example .env

RUN yarn install 

RUN nest build

CMD ["node", "dist/main.js"]