var me = {
		name: 'Scott T. Peterson',
		location: 'Provo, UT',
		occupations: ['retail','campus rep', 'student'],			
		hobbies: [{
				type: 'sport',
				name:'Baseball'
				}, {
				type: 'stressRelief',
				name: 'Gaming'
				}, {
				type: 'physical',
				name: 'Hiking'
				}, {
				type: 'sport',
				name: 'Basketball'
				}],
		skills: [{id: 1, name: 'basketbal', experience: 'amateur'}]

};





module.exports = {
	
	getName: function(req, res, next) {
		res.status(200).json({name: me.name});
		console.log('you got a name')
	},
	getLocation: function(req, res, next) {
		res.status(200).json({location: me.location});
		console.log("your location")
	},
	getOccupations: function(req, res, next) {
		if(req.query.order === 'asc') {
			res.status(200).json({occupations: me.occupations.sort()})
			console.log('sort occupations by asc')
		} else if(req.query.order === 'desc') {
			res.status(200).json({occupations: me.occupations.sort().reverse()})
			console.log('sort occupations by desc')
		} else {
			res.status(200).json({occupations: me.occupations})
			console.log('got your occupations')
		}
	},
	getLatestOccupation: function(req, res, next) {
		res.status(200).json({latestOccupation: me.occupations[me.occupations.length -1]});
		console.log('your latest occupation')
	},
	getOccupationByName: function(req, res, next) {
		for(var i =0; i < me.occupations.length; i++) {
			if(req.query.id === me.occupations[i]) {
				res.status(200).json({occupation: me.occupations[i]})
				console.log('oh i remember doing that')
			} else {
				console.log('i never did that')
			}
		}
	},
	getHobbies: function(req, res, next) {
		res.status(200).json({hobbies: me.hobbies});
		console.log("you got hobbies")
	},
	getHobbiesByType: function(req, res, next) {
		var hobbyType = req.params.type
		
		console.log(hobbyType)
		for(var i = 0; i < me.hobbies.length; i++) {
			if(me.hobbies[i].type === hobbyType) {
				res.status(200).json({hobby: me.hobbies[i]})
				console.log("you got hobies with a certain type");
			} else {
				console.log("no hobby with that type")
			}
		}
	},
	editName: function(req, res, next) {
		me.name = req.body.name;
		res.status(200).json({name: me.name})
		console.log('you changed your name')
	},
	editLocation: function(req, res, next) {
		me.location = req.body.location;
		res.status(200).json({location: me.location})
		console.log('you changed your location')
	},
	addHobby: function(req, res, next) {
		me.hobbies.push(req.body)
		res.status(200).json({hobbies: me.hobbies})
		console.log('you added a hobby')
	},
	addOccupation: function(req, res, next) {
		me.occupations.push(req.body)
		res.status(200).json({occupations: me.occupations})
		console.log('you added an occupation')
	},
	getSkills: function(req, res, next) {
		res.status(200).json({skills: me.skills});
	},
	getSkillsByExperience: function(req, res, next) {
		var skillLevel = req.params.type;
		for(var i = 0; i < me.skills.length; i++) {
			if(me.skills[i].experience === skillLevel) {
				res.status(200).json(req.body)
			}
		}
	},
	postSkill: function(req, res, next) {
		req.body.id = 'pwd' + me.skills.length + 1 + 'twT' + Math.floor(Math.random()*100);
		me.skills.push(req.body);
		res.status(200).json({skills: me.skills})
	}
}