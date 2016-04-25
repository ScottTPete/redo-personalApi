angular.module('personalApi')
	.controller('meCtrl', function($scope, meService) {
	
		meService.getMe().then(function(response) {
			console.log(response.data);
			$scope.me = response.data;
			
		})
	
	
})