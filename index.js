var express = require('express');
var app = express();

app.set('views', __dirname + '/client/templates');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/build'));

app.get('/home', function (req, res) {
    res.render('index');    
});

console.log("Listening on port: 3000");
app.listen(process.env.PORT || 3000);