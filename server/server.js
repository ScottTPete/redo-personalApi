var express = require('express'),
	bodyParser = require('body-parser'),
	middlewear = require('./controllers/middleware'),
	mainCtrl = require('./controllers/mainCtrl'),
	skillsCtrl = require('./controllers/skillsCtrl')
	app = express()

//app.use() will apply a function to every request made.

app.use(bodyParser.json());

app.use(middlewear.addHeaders);

app.get('/personal/api/name', mainCtrl.getName); //works
app.get('/personal/api/location', mainCtrl.getLocation); //works
app.get('/personal/api/occupations', mainCtrl.getOccupations); //works. occupations?order=asc is how queries are done.
app.get('/personal/api/occupations/latest', mainCtrl.getLatestOccupation); //works
app.get('/personal/api/occupations/:jobName', mainCtrl.getOccupationByName);  //works
app.get('/personal/api/hobbies', mainCtrl.getHobbies); //works
app.get('/personal/api/hobbies/:type', mainCtrl.getHobbiesByType); //works

app.put('/personal/api/name', mainCtrl.editName); //works
app.put('/personal/api/location', mainCtrl.editLocation); //works

app.post('/personal/api/hobbies', mainCtrl.addHobby); //works
app.post('/personal/api/occupations', mainCtrl.addOccupation); //works

app.get('/personal/api/skills', mainCtrl.getSkills); //works
app.get('/personal/api/skills/:experience', mainCtrl.getSkillsByExperience); //works

app.post('/personal/api/skills', middlewear.createId, mainCtrl.postSkill) //works and generates an id

app.get('/personal/api/secrets/:username/:pin', middlewear.verifyUser, mainCtrl.getSecrets); //works











//SET UP PORT//
var port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log('Listening on port ' + port);
})