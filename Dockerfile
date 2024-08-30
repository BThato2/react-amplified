# pull the official base image
FROM node:20-alpine

# set working direction
WORKDIR /app

# install application dependencies
COPY package*.json .
RUN npm i

# add app
COPY . .

EXPOSE :5173

# start app
CMD ["npm", "run", "dev"]
