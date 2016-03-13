var express = require('express');
var app = express();


app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade');

//output in pretty html format
app.locals.pretty = true;

app.get('/template', function(req, res) {
    res.render('index');
})
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
