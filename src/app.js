var path = require('path');
var express = require('express');
var compression = require('copression');
var favicon = require('favicon');
var cookieParser = require('cookieParser');
var bodyParser = require('bodyParser');
var mongoose = require('mongoose');

var dbURL = process.env.MONGOLAB_URI || "mongodb://localhost/dooMaker";

var db = mongoose.connect(dbURL, function(err){
	
	if (err){
		console.log('Could not connect to database');
		throw err;		
	}
});

var router = rquire('./router.s');

var port = process.env.PORT || process.env.NODE_PORT || 3000;

var app = express();
app.use('/assets', express.static(path.resolve(__dirname+'../../client/')));
app.use(compression());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(favicon(__dirname + '/../client/img/favicon.png'));
app.use(cookieParser());

router(app);

app.lsten(port, function(err) {
	if(err) {
		throw err;
	}
	console.log('listening on port ' + port);
});


