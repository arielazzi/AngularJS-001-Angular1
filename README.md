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

#### Restrições 

> * `A` - only matches attribute name
> * `E` - only matches element name
> * `C` - only matches class name
> * `M` - only matches comment
 
 #### Exemplo
 
 ``` js
 angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo : '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo; 
});
 ```
 
 ```html 
<meu-painel ng-repeat="foto in fotos" titulo="{{foto.titulo}}">
      <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">
</meu-painel>
```

---


### Observações - Aula 5 (Filter)

 * ng-model - permite ler e propagar alterações de dados a partir da view
 * Diretiva ng-model-options="{debounce : 500}" - Posterga o two-way data binding
 * | filter : filtro - Realiza um filtro dinamicamente com base no valor da ng-model `filtro`
 * ngAnimete - Habilita para uma série de diretivas a capacidade de adicionarem ou removerem classes de acordo com o estado de seus elementos. Fazendo uma analogia com CSS, é como se fossem pseudo classes.

---

### Observações - Aula 6 (Routes)
 
 * Single Page Applications - Aplicação de única página
 * view Parcial - são fragmentos de páginas que são carregados dinamicamente e são injetadas na ng-view
 * Diretiva ng-view - Lacuna que recebe o conteúdo parcial
 * Módulo ngRoute - Direciona e ele já faz o trabalho de atualizar index.html automaticamente com o conteúdo da página. (Pega a view parcial e insere na ng-view)
 * ng-src - Com isso, apenas Angular processará a diretiva, inclusive só depois da AE ter sido avaliada.

---

### Observações - Aula 7 (Validação)
 
 * ng-submit (ng-click, ng-blur, ...) - Para cada evento do JS existe uma diretiva do angular para interação
 * novalidate(inserido no form) - Precisamos abdicar do sistema de validação do HTML5 e abraçar totalmente o do Angular. Sendo assim, precisamos desabilitar o sistema de validação do HTML5.

---

### Observações - Aula 8 (Edição/Exclusão)


 * o truque com a função splice para evitar uma nova requisição

```js
$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível remocer a foto ' + foto.titulo;
		});	

```

 * $routeParams - Pega os parâmetros passados nas rotas.

---

### Observações - Aula 9 (Novas Funcionalidades)

 * ng-options - (value) as (exibição) for (value) as (dataset)

 ```js
	ng-options="grupo._id as grupo.nome for grupo in grupos"

 ```

 * Ajustes de exibição

```js
	(grupo.nome | uppercase)
``` 

 * passando expressão para diretiva (uma chamada de função)

```js
.directive('meuBotaoPerigo', function() {

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		nome : '@',
		acao : '&'
	};

	ddo.template = "<button ng-click='acao(foto)'' class='btn btn-danger btn-block'>{{nome}}</button>";

	return ddo;
});
```

---

### Observações - Aula 10 (Angular Resource)

 * Uma factory que cria um objeto de recurso que permite interagir com as fontes de dados RESTful do lado do servidor.

 * $resource(url, paramDefaults, actions)
```js
angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {

	return $resource('v1/fotos/:fotoId', null, {
		update : {
			method : 'PUT'
		}
	});

});

```
 * GET

```js
recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto; 
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto'
        });

```

 * PUT (Criando na factory)

```js
recursoFoto.update({ fotoId : $scope.foto._id }, $scope.foto, function() {
					$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
				}, function(erro) {
					$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
					console.log(erro);
				});

```

 * POST

```js
recursoFoto.save($scope.foto, function() {
					$scope.foto = {};
					$scope.mensagem = 'Foto incluída com sucesso!';
				}, function(erro) {
					$scope.mensagem = 'Não foi possível incluir a foto!';
					console.log(erro);
				});

```

 * DELETE

```js
recursoFoto.delete({ fotoId : foto._id }, function() {

			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';

		}, function() {

			console.log(erro);
			$scope.mensagem = 'Não foi possível remocer a foto ' + foto.titulo;

		})

```

---

### Observações - Aula 11 (Melhorando o código)

 * Factory com promisse

```js
.factory('cadastroDeFotos', function(recursoFoto, $q){

	var servico = {};

	servico.cadastrar = function(foto) {
		return $q(function(resolve, reject){
			
		});
	};

	return servico;

});
```