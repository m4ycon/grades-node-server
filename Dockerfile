FROM node:16.14.0-alpine3.15

WORKDIR /app

COPY package*.json .
RUN yarn

COPY . .

CMD ["yarn", "start"]
