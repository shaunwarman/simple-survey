var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

console.log("Listening on port: 3000");
app.listen(process.env.PORT || 3000);