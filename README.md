
Tokenlab Calendar API

API for the TokenLab Job Challange.

Developed using:
    Node ^v12.16.3^
    Postgres ^PostgreSQL 12.2, compiled by Visual C++ build 1914, 64-bit^

#### How to run
    Clone this respository

    On the root directoy, type:

    In the project directory, run:

### `npm install`

    Configure yout connection with PostGres on the ./.env file

    Set the 
### `DEV_DATABASE_URL`
    with the URL using the following format
### postgres://USER:PASSWORD@SERVER_ADDRESS:PORT/DATABASE

    Run the Script for migration of the Models:

### `npm run sqlize-migrate`

    Run the script for start server:

### `npm run dev`


The following is the challange description:

# tokenlab-calendar-api
O desafio consiste em fazer um sistema web de calendário de eventos com backend e frontend. 

Caso você seja candidato a CLT, será obrigatório ser desenvolvido na arquitetura REST, e caso você seja candidato a estagiário, a arquitetura REST é opcional, porém será considerada como um diferencial. 

O sistema deverá prover as seguintes funcionalidades: 
▪ Login para acesso ao sistema; 
▪ Adição de eventos; 
▪ Edição de eventos; 
▪ Remoção de eventos; 
▪ Listagem de eventos;  

Os atributos necessários para o evento são: 
▪ Descrição; 
▪ Hora de início; 
▪ Hora de termino;  

Os atributos a seguir não são obrigatórios, porém serão considerados como um diferencial na seleção do candidato: 
▪ Eventos com duração de mais de um dia; 
▪ Não deixar sobrescrever eventos e caso ocorra, emitir um alerta para o usuário; 
▪ Suporte a vários usuários; 
▪ Caso haja suporte a vários usuários, também poderá ser implementado o convite a outros usuários para eventos, ou seja, o evento aparecerá no calendário do usuário convidado e o usuário convidado poderá responder se poderá participar ou não (RSVP); 
▪ Responsividade, assim como o uso de Bootstrap ou outro framework CSS; 
▪ Frontend renderizado no lado do cliente;  

Poderá ser utilizada a linguagem e o banco de dados de preferência do desenvolvedor, bem como o uso de frameworks fica à escolha do candidato, porém recomendamos o uso de Angular no frontend. Não será necessário fazer deploy em servidor, apenas apresentação na máquina do candidato ou envio antecipado do código com instrução para rodar a aplicação.  

Orientações: 
-> O prazo para a entrega do projeto é de 1 (uma) semana.  
-> Utilize um dos links abaixo para marcar a entrevista e apresentação do desafio: 
Opção 1: https://calendly.com/rafael-hiroki/entrevista-tecnica-de-web 
Opção 2: https://calendly.com/christianNogueira/entrevista-tecnica-de-web?month=2019-09  
-> Ao finalizar o desafio, responda esta pergunta com o link do repositório (GitHub, Bitbucket etc..) .  

Bom desafio!


require('crypto').randomBytes(64).toString('hex')