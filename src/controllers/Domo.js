var _ = require('underscore');
var models = require('../models');

var Domo = models.Domo;

var makerPage = function(req, res) {
	
	Domo.DomoModel.findByOwner(req.session.account._id, function(err, docs){
		
		if(err){
			console.log(err);
			return res.status(400).json({error: 'An error occured'});
		}
		
		res.render('app', { csrfToken: req.csrfToken(), domos: docs});
	});
	
};

var makeDomo = function(req, res){
	
	if(!req.body.name || !req.body.age || !req.body.level) {
		return res.status(400).json({error: "RAWR! Name age and level are required"});
	}
	
	var domoData = {
		name: req.body.name,
		age: req.body.age,
		level: req.body.level,
		owner: req.session.account._id
	};
	
	var newDomo = new Domo.DomoModel(domoData);
	
	newDomo.save(function(err){
		if(err) {
			console.log(err);
			return res.status(400).json({error:'An error occured'});
		}
		res.json({redirect: '/maker'});
	});
	
};

var deleteDomo = function(req, res){
    Domo.DomoModel.remove({_id: req.params._id}, function(err){
        if(err){
            res.json(err);
        }
        else{
            res.redirect('/maker');
        }        
    });
};

module.exports.makerPage = makerPage;
module.exports.make = makeDomo;
module.exports.deleteDomo = deleteDomo;