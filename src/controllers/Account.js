var models = require('../models');

var Account = models.Account;

var loginPage = function(req, res){
	res.render('login');
};

var signupPage = function(req, res){
	res.render('signup');
};

var logout = function(req, res){
	res.redirect('/');
};

var login = function(req, res){
	
};

var signup = function(req, res){
	
};

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signupPage = signupPage;
module.exports.signup = signup;