
FROM node:10-alpine

# Set a working directory
WORKDIR /usr/src/app

COPY . ./
# ARG PACKAGE

# create the directory inside the container
# WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
# COPY ./packages/${PACKAGE}/package*.json ./

# run npm install in our local machine
# RUN npm install

# copy the generated modules and all other files to the container
# COPY ./packages/${PACKAGE}/ ./

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 8080

# # the command that starts our app
# CMD cd /usr/app/packages/${PACKAGE} && node server