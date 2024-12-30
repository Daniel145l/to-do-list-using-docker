# Usar imagem base do Node.js
FROM node:18

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos necessários
COPY app/package.json ./  
RUN npm install  

# Copiar todo o código da aplicação
COPY app/ ./

# Criar diretório de dados e definir permissões
RUN mkdir /data
VOLUME ["/data"]

# Expor a porta 3000 para acesso externo
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
# docker-compose build ; docker-compose up ;