# Etapa de construcción
FROM node:18-alpine as build
# Establecer el directorio de trabajo
WORKDIR /app
# Copiar package.json y package-lock.json
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar los archivos de la aplicación
COPY . .
# Construir la aplicación
RUN npm run build
# Etapa de ejecución
FROM nginx:alpine
# Copiar el build de Angular al directorio de Nginx
COPY --from=build /app/dist/strapi-angular-poc /usr/share/nginx/html
# Exponer el puerto 80
EXPOSE 80
# Comando para ejecutar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]