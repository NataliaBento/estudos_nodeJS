📌 API de Cadastro de Postagens
Esta é uma pequena API desenvolvida para estudo, cujo objetivo é permitir que os usuários cadastrem postagens, visualizem todas as postagens disponíveis e excluam postagens.

A API foi construída utilizando:

Node.js
Express
Sequelize
Handlebars
Banco de Dados SQL
____________________________________________________________________________________________________________________________________________________________________________
🚀 Como Rodar o Projeto
1️⃣ Clonar o Repositório
Se ainda não fez o download do projeto, clone o repositório com:
git clone https://github.com/NataliaBento/estudos_nodeJS.git
Acesse a pasta do projeto:
cd estudos_nodeJS

2️⃣ Instalar as Dependências
Antes de rodar o projeto, instale todas as dependências necessárias executando:

npm install
Isso garantirá que a pasta node_modules seja criada corretamente e que todas as bibliotecas sejam baixadas.

3️⃣ Criar o Banco de Dados
Antes de rodar a API, crie o banco de dados no seu gerenciador SQL (MySQL). Execute o seguinte comando no seu banco:

CREATE DATABASE postapp;
Após criar o banco, vá até o arquivo db.js, remova o comentário da linha de sincronização do banco e rode o projeto para garantir que as tabelas sejam criadas corretamente.

4️⃣ Rodar o Servidor
Agora, inicie a API utilizando um dos comandos abaixo:

node index.js
ou, para um desenvolvimento mais dinâmico com recarregamento automático:

npx nodemon index.js
A API estará rodando em http://localhost:8081.
____________________________________________________________________________________________________________________________________________________________________________

📌 Rotas da API
Método	Rota	Descrição
http://localhost:8081	/	Lista todas as postagens
http://localhost:8081/cad	Exibe o formulário para criar postagens
