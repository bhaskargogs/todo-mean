var express = require('express');
var app = express();       // creating our app with express
var mongoose = require('mongoose');   // required for mongodb, act as an odm tool
var morgan = require('morgan');     // logs request to the console

var bodyParser =  require('body-parser'); //pulls info form HTML POST
var methodOverride = require('method-override');

var database = require('./config/database');
var port = process.env.PORT || 3230;

//Configuration ==========================
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

//routes =============================

require('./app/routes.js')(app);

//listen to port =============================

app.listen(port);
console.log("App listening on port : " + port);
console.log("App listening on port : " + port);
