var mongoose = require('mongoose'),
    config = require('../../config');

mongoose.connect('mongodb://127.0.0.1:27017/'+config.system.baseName);


mongoose.connection.on('connected', function () {
    console.log('Mongoose подключен к базе '+config.system.baseName );
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;