var skills = [{id: '1', name: 'dunking', experience: 'minimal'}];


module.exports = {
	
	getSkills: function(req, res, next) {
		res.status(200).json(req.body);
	},
	getSkillsById: function(req, res, next) {
		var skillLevel = req.params.type;
		for(var i = 0; i < skills.experience.length; i++) {
			if(skills[i].experience === skillLevel) {
				res.status(200).json(req.body)
			}
		}
	},
	postSkill: function(req, res, next) {
		if(res.status(200)) {
			skills.push(req.body)
		} else {
			
		}
	}
	
	
	
	
}