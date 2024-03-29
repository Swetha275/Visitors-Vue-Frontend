# Use an official Node.js runtime as a parent image
FROM node:18.14.2-slim

# Set the working directory to /app
WORKDIR /home/app

COPY . ./

# building the app
RUN npm i
RUN npm run build

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]