angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {

	return $resource('v1/fotos/:fotoId', null, {
		update : {
			method : 'PUT'
		}
	});
})
.factory('cadastroDeFotos', function(recursoFoto, $q){

	var servico = {};

	servico.cadastrar = function(foto) {
		return $q(function(resolve, reject){
			if(foto._id) {

				recursoFoto.update({ fotoId : foto._id }, foto, function() {
					resolve({
						mensagem : 'foto ' + foto.titulo + ' atualizada com sucesso!',
						inclusao : false
					});
					
				}, function(erro) {
					reject();
				});

			} else {

			} 
		});
	};

	return servico;

});