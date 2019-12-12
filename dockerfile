FROM node:13.3.0-alpine3.10

COPY package.json yarn.lock ./
ENV REACT_APP_API_HOST=https://pokeapi.co/api/v2
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

ADD . /app

WORKDIR /app

EXPOSE 3001
CMD ["yarn", "start"]