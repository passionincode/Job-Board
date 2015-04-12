var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data.js')

var app = express();

//Tell node where views are located
app.set('views', __dirname);

//Set view engine
app.set('view engine', 'jade');

//Make bower components available to views 
app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    jobsData.findJobs().then(function(collection) {
        res.send(collection);
    })
})

//Angualar will handle routing
//res & res are objects
app.get('*', function(req, res) {
    res.render('index');
});

//Connect to mongoose db\
jobsData.connectDB("mongodb://admin:AlphaOmega116@ds061611.mongolab.com:61611/jobworkspaceapp")
    .then(function() {
        console.log("connected to mongoose successfully!");
        jobsData.seedJobs();
    });

//Where to listen to requests
app.listen(process.env.PORT || 3000, process.env.IP);
console.log("debugger listening on port " + "3000");