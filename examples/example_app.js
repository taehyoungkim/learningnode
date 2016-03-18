var express = require('express');
var app = express();
//needed for POST file transfer
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'jade');

//output in pretty html format
app.locals.pretty = true;

//semantic URL
app.get('/teams/:id', function(req, res) {
    var teams = [
        '6210',
        '7161',
        '4545'
    ];
    var output = teams[req.params.id];
    res.send(output);
});

app.get('/teams/:id/:mode', function(req, res) {
    var teams = [
        '6210',
        '7161',
        '4545'
    ];
    res.send(req.params.mode + "ing " + teams[req.params.id]);
});


// POST method
app.post('/process', function(req, res) {
    var title = req.body.title;
    var desc = req.body.description;
    res.send('<h1>' + title + '</h1>' + '<br><p>' + desc + '</p>');
});

//Jade template
app.get('/template', function(req, res) {
    res.render('index', {title: 'Hello!', time: Date()});
});

app.get('/form', function(req , res) {
    res.render('form');
});
//routing
app.get('/', function(req, res) {
    res.send('Hello');
});

app.get('/test', function(req, res) {

    var li = 'Test';

    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "utf-8">
            <title>A Dynamic Page</title>
        </head>
        <body>
            <h4>A ${li} page</h4>
        </body>
    </html>`;

    res.send(output);
})

app.listen(3000, function() {
    console.log('Listening at port 3000!');
})
