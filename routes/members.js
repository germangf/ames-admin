var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var moment = require('moment');

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

router.get('/active', function(req, res, next) {
	Member.find({ endDate: { $eq: null } }, function(err, members) {
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

router.put('/', function(req, res, next) {
	var member = new Member(req.body);
	member.update(member, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});

});

router.put('/:id', function(req, res, next) {
	console.log(req.body);
	var member = new Member(req.body);
	console.log(member);
	member.endDate = moment().format('DD.MM.YYYY');
	console.log(member);
	member.update(member, function(err, result) {
		console.log(err);
		console.log(result);
		if (err) {
			return next(err);
		}
	  res.json(result);
	});
});

router.post('/filter', function(req, res, next) {
	var filterData = req.body;
	var conditions = [];
	filterData['startDate'] && conditions.push({ startDate: { $ne: null } });
	filterData['name'] && conditions.push({ name: new RegExp(filterData['name'], 'i') });
	filterData['surnames'] && conditions.push({ surnames: new RegExp(filterData['surnames'], 'i') });
	filterData['email'] && conditions.push({ email: new RegExp(filterData['email'], 'i') });
	filterData['section'] && conditions.push({ 'ames.section': filterData['section'] });
	filterData['quotePending'] && conditions.push({ 'ames.quoteYear': { $ne: moment().format('YYYY') } });
	if (filterData['status']) {
		var status = filterData['status'];
		if ('ACT' === status) {
			conditions.push({ endDate: { $eq: null } });
		} else if ('REM' === status) {
			conditions.push({ endDate: { $ne: null } });
		} else if ('ALL' === status) {}
			conditions.push({ startDate: { $ne: null } });
	} 
	console.log(conditions);

	Member.find({ $and: conditions }, function(err, members) {
		console.log(err);
		console.log(members);
		if (err) {
			return next(err);
		}
	  res.json(members);
	});
});

module.exports = router;
