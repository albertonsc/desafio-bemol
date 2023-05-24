FROM node:alpine

WORKDIR /app/frontend

COPY . .

RUN npm install
RUN npm install axios 
RUN npm install react-bootstrap
RUN npm install react-router-dom

EXPOSE 8000

CMD npm start