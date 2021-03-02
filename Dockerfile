FROM node

COPY . /HelloDocker
WORKDIR /HelloDocker

RUN npm install 

EXPOSE 3000

ENTRYPOINT ["npm","start"]