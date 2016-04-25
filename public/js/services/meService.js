angular.module('personalApi')
	.service('meService', function($http) {
	
		return {
			getMe: function() {
				return $http.get('http://localhost:3000/personal/api/me');
			},
			updateName: function(name) {
				return $http.put('http://localhost:3000/personal/api/name', {name})
			},
			updateLocation: function(location) {
				return $http.put('http://localhost:3000/personal/api/name', {location})
			},
			addHobby: function(hobby) {
				return $http.post('http://localhost:3000/personal/api/hobbies', {name: hobby.name, type: hobby.type})
			},
			addOccupation: function(job) {
				return $http.post('http://localhost:3000/personal/api/occupations', {occupation: job})
			},
			addSkill: function(skill) {
				return $http.post('http://localhost:3000/personal/api/skills', {name: skill.name, experience: skill.experience})
			}
		}
	
	
	
})