# AngularJS - Angular 1
Um framework MVC no lado do cliente criado como um projeto interno da Google e liberado para o público em 2009, ele tem como foco a criação de Single Page Applications (SPA’s). Este tipo de aplicação não recarrega a página durante seu uso, dando uma experiência mais fluída para o usuário.

 

## Node.js
O Node.js é um ambiente JavaScript multiplataforma disponível para Linux, Mac e Windows.



## Curiosidade
O projeto Alurapic utiliza [Express](http://expressjs.com/) para criar endpoints REST e o [NeDB](https://github.com/louischatriot/nedb), um banco de dados totalmente feito em Node.js e que não necessita qualquer configuração especial.



## Instalando as Dependências

 1. Acessar a pasta `alurapic`
 2. Executar o comando `npm install`

> É instalado as dependências do arquivo `package.json`



## Rodando o Servidor

 1. Acessar a pasta `alurapic`
 2. Executar o comando `npm start`

---

### Observações - Aula 2 (Estrutura)

 * Angular Expression (AE) - `{{ }}` serve para abrir lacunas em nossas views, que por sua vez passam a funcionar como templates.
 * Data binding (associação de dado) - Um dado disponibilizado por um controller para a view
 * Diretiva ng-app - Indica o escopo de atuação do Angular
 * Diretiva ng-controller - Indica o controller que gerencia uma determinada tag

---

### Observações - Aula 3 (Comunicando com o back-end)

 * Diretiva ng-repeat - repete a criação de uma marcação HTML
 * Serviço $http - Requisição assíncrono, ou seja, não bloqueia o uso da aplicação enquanto é executado
 * $http retorna uma promise, ou seja, se a promessa for cumprida, teremos os dados, caso contrário, ficaremos a ver navios

---

### Observações - Aula 4 (Diretivas)

 * Diretivas são componentes reutilizáveis
 * ddo - Directive Definition Object
 * ddo.restrict - restrições da forma de chamada da diretiva
 * ddo.transclude/ng-transclude - Mecanismo de transclusão (Inserir HTML)
 
 Propriedade isolada da diretiva, ou seja, basta passar a diretuva com o nome da propriedade para ser substituído
 ``` js
 ddo.scope = {
		titulo : '@'
	};
 ```
 
 ```html 
<meu-painel ng-repeat="foto in fotos" titulo="{{foto.titulo}}">
      <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">
</meu-painel>
```
