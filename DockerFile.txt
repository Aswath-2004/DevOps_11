# Dockerfile for Blue/Green Node.js Application
FROM node:20-slim

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# App runs on 3000
EXPOSE 3000

# The VERSION is set during the Jenkins build step!
CMD [ "npm", "start" ]
