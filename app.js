var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false}));
app.set('views', './views');
app.set('view engine', 'jade');
//pretty html
app.locals.pretty = true;
//connection
app.listen(3000, function () {
    console.log('Listening to port 3000');
});
//routers
app.get('/teams/new', function(req, res) {
    res.render('new');
});

//when using the form
app.post('/teams', function(req, res) {
    var title = req.body.title;
    var desc = req.body.description;
    fs.writeFile('data/' + title, desc, function(err){
        if(err) {
            res.status(500).send('Internal Server Error!');
        }
        res.send('Success');
    });
});

app.get('/teams', function(req, res) {
    fs.readdir('data', function(err, files) {
        if(err){
            console.log(err);
            res.status(500).send('Error reading in directories!');
        }
        res.render('list', {list: files});
    });
});

app.get('/teams/:team', function(req, res) {
    var team = req.params.team;
    fs.readFile('data/'+team, 'utf-8', function(err, data){
        if(err) {
            console.log(err);
            res.status(500).send('Error reading team information');
        }
        res.send(data);
    });
})
