angular.module('alurapic').controller('FotoController', function($scope, cadastroDeFotos, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';


	if($routeParams.fotoId) {

		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto; 
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto'
        });

	}


	$scope.submeter = function() {

		if($scope.formulario.$valid) {
			

			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				// Limpa o formulario se for inclusão
				if($scope.inclusao) $scope.foto = {};
			})
			.catch(function(dados) {
				$scope.mensagem = dados.mensagem;
			});
			
		}
	};
});