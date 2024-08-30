
# pull the official base image
FROM node:20-alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "run", "dev"]
