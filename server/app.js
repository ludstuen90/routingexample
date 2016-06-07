//require express
var express = require('express');
// ^ usually the thing in parentehsis is the same name as what you put into NPM.... so that's how you know what it is
//create a new express app
var app=express();
//require a path;
var path =require ('path');

//spin up the server
var server= app.listen(8080, 'localhost', function(){
  console.log( 'server listening on port 8080');

});


//base url
app.get('/', function(req, res) {
res.writeHead(200);
    console.log("Hello, world! From inside base url get");
    res.write("You're in base");
    res.end();
});

// another url

app.get('/kitties', function(req, res) {
    res.writeHead(200);
    console.log("Hello, world! From inside kitties url get");
    res.send("You're in kitties");
});


//set up 'public' folder for static files
app.use(express.static('public'));
