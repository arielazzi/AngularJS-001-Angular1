angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams) {

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

			if($scope.foto._id) {
				
				recursoFoto.update({ fotoId : $scope.foto._id }, $scope.foto, function() {
					$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
				}, function(erro) {
					$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
					console.log(erro);
				});
				

			} else {

				recursoFoto.save($scope.foto, function() {
					$scope.foto = {};
					$scope.mensagem = 'Foto incluída com sucesso!';
				}, function(erro) {
					$scope.mensagem = 'Não foi possível incluir a foto!';
					console.log(erro);
				});

				
			}

			
		}
	};
});