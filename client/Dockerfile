FROM node:hydrogen-alpine3.19 AS build-front
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
RUN npm run build

FROM node:hydrogen-alpine3.19 AS prod
WORKDIR /usr/src/app
RUN npm install -g serve
COPY --from=build-front /usr/src/app/package*.json /usr/src/app/
COPY --from=build-front /usr/src/app/build /usr/src/app/build
EXPOSE 3000
CMD ["serve", "-s", "build", "-p", "3000"]