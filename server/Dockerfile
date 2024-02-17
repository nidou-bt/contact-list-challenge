FROM node:hydrogen-alpine3.19 AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
# RUN npm install --no-cache
RUN npm install
COPY . /usr/src/app/
RUN npx prisma migrate dev
EXPOSE 3001
CMD ["npm", "run", "server"]