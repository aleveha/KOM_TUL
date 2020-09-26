# pull official base image
FROM node:13.12.0-alpine

#set working directory
WORKDIR /kom_tul

# add `/kom_tul/node_modules/.bin` to $PATH
ENV PATH /kom_tul/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install --save react-router-dom --silent
RUN npm install @types/react-router-dom --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
