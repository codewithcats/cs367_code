FROM node:15.12.0-alpine3.13

WORKDIR /student_2
COPY package.json package-lock.json ./

# install dependencies -> node_modules
RUN npm install

COPY index.js index.js

ENTRYPOINT ["node", "index.js"]