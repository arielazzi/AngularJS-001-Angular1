angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

	/* Directive Definition Object */
	var ddo = {};

	/*
	A - Atribute - <div meu-painel></div>
	E - Element  - <meu-painel></meu-painel>
	*/
	ddo.restrict = "AE";

	ddo.scope = {
		titulo : '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo; 
});