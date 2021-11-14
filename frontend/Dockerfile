FROM node:14

# Create the workdir
RUN mkdir /myapp
WORKDIR /myapp

# Install packages
COPY package*.json ./
RUN npm install

# Copy source code to the container
COPY . ./
CMD npm run start-docker
