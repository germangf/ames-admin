var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var moment = require('moment');
var querystring = require('querystring');

require('../models/Members');
var Member = mongoose.model('Member');

// GET /members - list of members
router.get('/', function(req, res, next) {
	console.log('list of members');
	console.log(req.query);
	
	var conditions = [];
	if (req.query.status) {
		var status = req.query.status;
		if ('ACT' === status) {
			conditions.push({ endDate: { $eq: null } });
		} else if ('REM' === status) {
			conditions.push({ endDate: { $ne: null } });
		} else if ('ALL' === status) {}
			conditions.push({ startDate: { $ne: null } });
	} else {
		conditions.push({ endDate: { $eq: null } });
	}	
	if (req.query.name) {
		conditions.push({ name: new RegExp(req.query.name, 'i') });
	}
	if (req.query.lastName) {
		conditions.push({ lastName: new RegExp(req.query.lastName, 'i') });
	}
	if (req.query.email) {
		conditions.push({ email: new RegExp(req.query.email, 'i') });
	}
	if (req.query['ames.section']) {
		conditions.push({ 'ames.section': req.query.ames.section });
	}
	if (req.query['ames.quoteYear']) {
		conditions.push({ 'ames.quoteYear': { $ne: moment().format('YYYY') } });
	}
	console.log(conditions);

	Member.find({ $and: conditions }, function(err, members) {
		if (err) {
			return next(err);
		}
	  res.json(members);
	});
});

// GET /members/12 - get member 12
router.get('/:id', function(req, res, next) {
	console.log('get member 12');
	Member.find({ '_id': req.params.id }, function(err, member) {
		console.log(err);
		console.log(member);
		if (err) {
			return next(err);
		}
	  res.json(member);
	});
});

// POST /members - new member
router.post('/', function(req, res, next) {
	var member = new Member(req.body);
	member.save(function(err, member) {
		if (err) {
			return next(err);
		}
	  res.json(member);
	});
});

// PUT /members/12 - update member 12
router.put('/:id', function(req, res, next) {
	var member = new Member(req.body);
	member.update(member, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});
});

// DELETE /members/12 - delete member 12
router.delete('/:id', function(req, res, next) {
	var member = new Member(req.body);
	member.endDate = moment().format('DD.MM.YYYY');
	member.update(member, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});
});

// GET /members?key=vale - search
router.get('/', function(req, res, next) {
	console.log('search');
	console.log(req.query);
	for (var key in req.query) {
		console.log(key);
	}
	console.log(querystring.stringify(req.query));
});

/*
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
router.get('/active', function(req, res, next) {
	Member.find({ endDate: { $eq: null } }, function(err, members) {
		if (err) {
			return next(err);
		}
	  res.json(members);
	});
});
*/

module.exports = router;
