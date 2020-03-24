# be-the-hero

# projeto desenvolvido na semana oministack 11

# dia 1

//criando arquivo package.json para guardar as dependecias
npm init -y

//instalando o micro framework exepress para criar as rotas
npm install express

//configurando um servidor para executar a api em node.js

# 1 criar um arquivo index.js

# 2 usar o seguinte codigo

const express = require('express'); //importando o express

const app = express(); //estanciando

app.get('/', (request, response) => { //enviando uma resposta
    return response.json({ //mensagem que será mostrada
        nome: 'Enderson',
        dev: true,
    });
});

app.listen(3333); //executando em uma porta

//criando um react app
npx create-react-app [nome do app]