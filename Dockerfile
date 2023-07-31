# Stage 1: Build the Angular app
FROM node:14 AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:1.21-alpine

COPY --from=build /usr/src/app/dist/<YOUR-ANGULAR-APP-NAME> /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
