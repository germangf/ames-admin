var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

require('../models/Members');
var Member = mongoose.model('Member');

router.get('/', function(req, res, next) {
	Member.find(function(err, members) {
		if (err) {
			return next(err);
		}
	  res.json(members);
	});
});

router.get('/:id', function(req, res, next) {
	Member.find({ '_id': req.params.id }, function(err, member) {
		if (err) {
			return next(err);
		}
	  res.json(member);
	});
});

router.post('/', function(req, res, next) {
	var member = new Member(req.body);
	member.save(function(err, member) {
		if (err) {
			return next(err);
		}
	  res.json(member);
	});
});

router.put('/member', function(req, res, next) {
	var member = new Member(req.body);

	member.update(member, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});

});

router.delete('/:id', function(req, res, next) {
	Member.remove({ '_id': req.params.id }, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});

});

router.post('/filter', function(req, res, next) {
	var filterData = req.body;
	console.log(filterData);
	/*
	Member.find(filterData, function(err, members) {
		console.log(err);
		console.log(members);
		if (err) {
			return next(err);
		}
	  res.json(members);
	});
	*/
	Member.find({
		name: new RegExp(filterData.name, 'i')
	}, function(err, members) {
		console.log(err);
		console.log(members);
		if (err) {
			return next(err);
		}
	  res.json(members);
	});
});

module.exports = router;
