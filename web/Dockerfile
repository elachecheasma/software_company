FROM node:22-alpine3.20
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
CMD ["npm", "run", "dev"]
