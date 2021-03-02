Docker Basic 

# Getting Started 

![react-node-docker](https://user-images.githubusercontent.com/65372378/109647214-cb59a680-7b37-11eb-8988-8c3d40feabeb.png)

#Apresentação da forma mais simples de se criar um container utilizando Docker , nesse caso utilizando tambem react. Material de apoio para duvidas 
disponivel na documentação das ferramentas :

**React https://pt-br.reactjs.org/docs/getting-started.html

**Docker https://docs.docker.com/

#Para execução do projeto , basta clonar o repositorio :

      $ git clone https://github.com/CarlosBrunodev/Docker-Basic.git
  
#Proxima etapa é abrir o projeto , verificar o arquivo Dockerfile onde esta contido a configuraçao de criação do container , a estrutura utilizada baseia-se no modelo 
ex:

    FROM node:12-alpine
    WORKDIR /app
    COPY . .
    RUN yarn install --production
    CMD ["node", "src/index.js"]
 
 
 #Apos verificar o arquivo , executamos o comando :
 
      $ docker build -f Dockerfile -t hellodocker/node .
  
 #Feito o build do projeto , agora ja podemos rodar nosso container :
 
      $ docker run -d -p 8080:3000 hellodocker/node
  
  
