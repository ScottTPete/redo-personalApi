angular.module('personalApi')
	.controller('meCtrl', function($scope, meService) {
	
		$scope.getMe = function () {
			meService.getMe().then(function(response) {
				console.log(response.data);
				$scope.me = response.data;
			});
		}
		
		$scope.getMe();
	
	    
		$scope.updateName = function(name) {
			if(name) {
				meService.updateName(name)
				$scope.me.name = name;	
			} else {
				alert('Must enter a name to be saved')
			}
			$scope.name = '';
			
		}
		
		$scope.updateLocation = function(location) {
			if(location) {
				meService.updateLocation(location)
				$scope.me.location = location;	
			} else {
				alert('Must enter a name to be saved')
			}
			$scope.location = '';

		}
		
		$scope.addHobby = function(hobby) {
			
			if(hobby.type && hobby.name) {
				meService.addHobby(hobby).then(function(response) {
					console.log(response)
					$scope.me.hobbies = response.data.hobbies;
				})
				
				
			} else {
				alert("Must have type and hobby name")
			}
			$scope.hobby = '';
		}
		
		$scope.addOccupation = function(job) {

			if(job) {
				meService.addOccupation(job).then(function(response) {
					console.log(response)
					$scope.me.occupations = response.data;
				})


			} else {
				alert("Must enter a job")
			}
			$scope.job = '';
		}
		
		$scope.addSkill = function(skill) {
			if(skill.name && skill.experience) {
				meService.addSkill(skill).then(function(response) {
					console.log(response);
					$scope.me.skills = response.data;
				})
			}
		}
	
	
})