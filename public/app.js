angular.module('personalApi', ['ui.router'])
	.config(function($urlRouterProvider, $stateProvider) {
	
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/homeView.html',
				controller: 'meCtrl'
		    })
			.state('me', {
				url: '/me',
				templateUrl: 'views/meView.html',
				controller: 'meCtrl'
			})
			.state('skills', {
				url: '/skills',
				templateUrl: 'views/skillsView.html',
				controller: 'meCtrl'
			})
		
		$urlRouterProvider.otherwise('/');
	
	
})