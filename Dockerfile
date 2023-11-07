FROM node:18-alpine


WORKDIR /app

# have nodemon available for local dev use (file watching)
RUN npm install -g nodemon sequelize-cli

COPY package*.json ./

RUN npm ci \
 && npm cache clean --force 

COPY . .

EXPOSE 4000


CMD ["npm", "run", "docker"]