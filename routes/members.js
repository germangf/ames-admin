var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var moment = require('moment');
var querystring = require('querystring');

require('../models/Members');
var Member = mongoose.model('Member');

// GET /members - list of members
// GET /members?key=vale - search
router.get('/', function(req, res, next) {
	filter(req, res, next);
});

// GET /members/12 - get member 12
router.get('/:id', function(req, res, next) {
	Member.find({ '_id': req.params.id }, function(err, member) {
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
	Member
		.find({ '_id': req.params.id })
		.exec()
		.then(function(result) {
			var member = result[0];
			member.endDate = new Date();
			return member
				.update(member)
				.then(function(member) {
				  res.json(member);
				});
		});
});

function filter(req, res, next) {
	var query = filterQuery(req.query);
	console.log(query);

	Member
		.find(query)
		.exec()
		.then(function(result) {
			res.json(result);
  	});
}

function filterQuery(query) {
	var conditions = {};
	if (query.status) {
		conditions.status = { $in: query.status };
	}
	if (query.name) {
		conditions.name = new RegExp(query.name, 'i');
	}
	if (query.lastName) {
		conditions.lastName = new RegExp(query.lastName, 'i');
	}
	if (query.email) {
		conditions.email = new RegExp(query.email, 'i');
	}
	if (query.section) {
		conditions['ames.section'] = query.section;
	}
	console.log(query.quotePending);
	if (query.quotePending) {
		if ('CRT' === query.quotePending) {
			conditions.quoteYear = { $eq: moment().format('YYYY') };
		} else if ('PDT' === query.quotePending) {
			console.log(moment().format('YYYY'));
			conditions.quoteYear = { $ne: moment().format('YYYY') };
		}
	}
	return conditions;
}

module.exports = router;
