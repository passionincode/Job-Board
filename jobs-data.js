var mongoose = require('mongoose');
var Promise = require('bluebird');

var Job = mongoose.model('Job');


var findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
}

var createJob = Promise.promisify(Job.create, Job);

//exports 
exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveJob = createJob;



exports.seedJobs = function() {
    return findJobs({}).then(function(collection) {
        if (collection.length === 0) {
            return Promise.map(jobs, function(job) {
                return createJob(job);
            })
        }
    })
}

var jobs = [{
    title: 'Cook',
    description: 'You will be making bagels'
}, {
    title: 'Waiter',
    description: 'You will be putting food on people tables'
}, {
    title: 'Programmer',
    description: 'You will be mindlessly typing for hours'
}, {
    title: 'Axe Maker',
    description: 'We need many axes made.. so many..'
}];