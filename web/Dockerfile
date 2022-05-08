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
RUN npm install -g serve

# Build package
RUN npm run build

# Run the app
CMD serve -s build