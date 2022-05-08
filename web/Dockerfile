FROM node:alpine

# Arguments
ARG NODE_ENV

# Set the working directory
WORKDIR  /web

# Copy the files
COPY package*.json ./
COPY . .

# Install the packages
RUN npm install

# Run the app
CMD npm start