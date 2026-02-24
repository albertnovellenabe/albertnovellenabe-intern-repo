# Use a lightweight Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port NestJS runs on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "start:dev"]