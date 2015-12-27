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
	var limit = req.query.limit || 10;
	var options = {
    sort: sortQuery(req.query),
    lean: true,
    offset: req.query.page ? (req.query.page - 1) * limit : 0, 
    limit: limit
	};
	//console.log('--- options');
	//console.log(options);
	Member.paginate(filterQuery(req.query), options).then(function(result) {
	  res.json(result);
	});

});

function filterQuery(query) {
	var conditions = {};
	if (query.status) {
		var status = query.status;
		if ('ACT' === status) {
			conditions.endDate = { $eq: null };
		} else if ('REM' === status) {
			conditions.endDate = { $ne: null };
		} else if ('ALL' === status) {
			conditions.startDate = { $ne: null };
		}
	} else {
		conditions.endDate = { $eq: null };
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
	if (query.quotePending) {
		if ('CRT' === query.quotePending) {
			conditions['ames.quoteYear'] = { $eq: moment().format('YYYY') };
		} else if ('PDT' === query.quotePending) {
			conditions['ames.quoteYear'] = { $ne: moment().format('YYYY') };
		}
	}
	return conditions;
}

function sortQuery(query) {
	if (query.order) {
    var sort = query.order;
    var direction = 0 === sort.indexOf('-') ? -1 : 1;
    var orderBy = 1 === direction ? sort : sort.substring(1, sort.length);
		var conditions = {};
		conditions[orderBy] = direction;
		return conditions;
	}	
	return { creationDate: -1 };

}

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
	Member.update(req.params.id, { $set: { endDate: moment().toDate() }}, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});
});

module.exports = router;
