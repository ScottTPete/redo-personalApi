var me = require('../models/me');

module.exports = {
	addHeaders: function(req, res, next) { //next will pass request to next function in line.
		res.status(200).set({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			'X-XSS-Protection': '1; mode=block',
			'X-Frame-Options': 'SAMEORIGIN',
			'Content-Security-Policy': "default-src 'self' devmountain.github.io"
		});

		next();
	},
	verifyUser: function(req, res, next) {
		
		if(req.params.username === 'stpete' && req.params.pin === '9999') {
			next()
		} else {
			console.log("Access denied ");
		}
	},
	createId: function (req, res, next) {
		var randomNum = Math.floor(Math.random() * 100);
		
		req.body.id = 'pwd' + me.skills.length + 1 + 'twT' + randomNum;
		next();
	}
	
}