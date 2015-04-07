var express = require('express');

var app = express();

//Tell node where views are located
app.set('views', __dirname);

//Set view engine
app.set('view engine', 'jade');

//Make bower components available to views 
app.use(express.static(__dirname + '/public'));


//Angualar will handle routing
//res & res are objects
app.get('*', function(req, res) {
	res.render('index');
});

//Where to listen to requests
app.listen(3000);
console.log("debugger listening on port " + "3000");