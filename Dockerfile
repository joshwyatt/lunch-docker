FROM node
RUN mkdir app
ADD . /app
WORKDIR /app
RUN npm i -q
RUN npm i -gq nodemon
EXPOSE 8000
CMD ["npm", "start"]
