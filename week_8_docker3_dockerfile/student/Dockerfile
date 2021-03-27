FROM node:15.12.0-alpine3.13

WORKDIR /student
# Install dependencies
COPY package.json /student/package.json
COPY package-lock.json /student/package-lock.json
RUN cd /student
RUN npm install

# Copy source code
COPY index.js /student/index.js

ENTRYPOINT [ "node", "/student/index.js" ]