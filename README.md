# AngularJS - Angular 1
Um framework MVC no lado do cliente criado como um projeto interno da Google e liberado para o p�blico em 2009, ele tem como foco a cria��o de Single Page Applications (SPA�s). Este tipo de aplica��o n�o recarrega a p�gina durante seu uso, dando uma experi�ncia mais flu�da para o usu�rio.

 

## Node.js
O Node.js � um ambiente JavaScript multiplataforma dispon�vel para Linux, Mac e Windows.



## Curiosidade
O projeto Alurapic utiliza [Express](http://expressjs.com/) para criar endpoints REST e o [NeDB](https://github.com/louischatriot/nedb), um banco de dados totalmente feito em Node.js e que n�o necessita qualquer configura��o especial.



## Instalando as Depend�ncias

 1. Acessar a pasta `alurapic`
 2. Executar o comando `npm install`

> � instalado as depend�ncias do arquivo `package.json`



## Rodando o Servidor

 1. Acessar a pasta `alurapic`
 2. Executar o comando `npm start`



### Observa��es - Aula 1 (Estrutura)

 * Angular Expression (AE) - `{{ }}` serve para abrir lacunas em nossas views, que por sua vez passam a funcionar como templates.
 * Data binding (associa��o de dado) - Um dado disponibilizado por um controller para a view
 * Diretiva ng-app - Indica o escopo de atua��o do Angular
 * Diretiva ng-controller - Indica o controller que gerencia uma determinada tag



### Observa��es - Aula 2 (Comunicando com o back-end)

 * Diretiva ng-repeat - repete a cria��o de uma marca��o HTML
 * Servi�o $http - Requisi��o ass�ncrono, ou seja, n�o bloqueia o uso da aplica��o enquanto � executado
 * $http retorna uma promise, ou seja, se a promessa for cumprida, teremos os dados, caso contr�rio, ficaremos a ver navios