FROM node:current-alpine 
 
WORKDIR /app 
COPY . . 
EXPOSE 80 
CMD ["node", "app.js"] 