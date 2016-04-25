angular.module('personalApi')
	.service('meService', function($http) {
	
		return {
			getMe: function() {
				return $http.get('http://localhost:3000/personal/api/me');
			}
		}
	
	
	
})