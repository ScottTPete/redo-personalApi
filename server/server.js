var express = require('express'),
	bodyParser = require('body-parser'),
	middlewear = require('./controllers/middleware'),
	mainCtrl = require('./controllers/mainCtrl'),
	skillsCtrl = require('./controllers/skillsCtrl')
	app = express()

//app.use() will apply a function to every request made.

app.use(bodyParser.json());

app.use(middlewear.addHeaders);

app.get('/personal/api/name', mainCtrl.getName);
app.get('/personal/api/location', mainCtrl.getLocation);
app.get('/personal/api/occupations', mainCtrl.getOccupations);
app.get('/personal/api/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/personal/api/occupations/search?', mainCtrl.getOccupationByName)
app.get('/personal/api/hobbies', mainCtrl.getHobbies);
app.get('/personal/api/hobbies/:type', mainCtrl.getHobbiesByType);

app.put('/personal/api/name', mainCtrl.editName);
app.put('/personal/api/location', mainCtrl.editLocation);

app.post('/personal/api/hobbies', mainCtrl.addHobby);
app.post('/personal/api/occupations', mainCtrl.addOccupation);

app.get('/personal/api/skills', mainCtrl.getSkills);
app.get('/personal/api/skills/:experience', mainCtrl.getSkillsByExperience);

app.post('/personal/api/skills', /*middlewear.createId,*/ mainCtrl.postSkill)

app.get('/personal/api/secrets/:username/:pin');











//SET UP PORT//
var port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log('Listening on port ' + port);
})