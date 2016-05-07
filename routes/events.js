var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var moment = require('moment');
var querystring = require('querystring');

require('../models/Events');
var Event = mongoose.model('Event');

// GET /members - list of members
// GET /members?key=vale - search
router.get('/', function(req, res, next) {
	filter(req, res, next);
	/*
	console.log('search');
	var limit = req.query.limit || 10;
	var options = {
    sort: sortQuery(req.query),
    lean: true,
    offset: req.query.page ? (req.query.page - 1) * limit : 0,
    limit: limit
	};
	//console.log('--- options');
	//console.log(options);
	Event.paginate(filterQuery(req.query), options).then(function(result) {
	  res.json(result);
	});
	*/

});

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
	Event.find({ '_id': req.params.id }, function(err, event) {
		if (err) {
			return next(err);
		}
	  res.json(event);
	});
});

// POST /members - new member
router.post('/', function(req, res, next) {
	var event = new Event(req.body);
	event.save(function(err, event) {
		if (err) {
			return next(err);
		}
	  res.json(event);
	});
});

// PUT /members/12 - update member 12
router.put('/:id', function(req, res, next) {
	var event = new Event(req.body);
	event.update(event, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});
});

// DELETE /members/12 - delete member 12
router.delete('/:id', function(req, res, next) {
	var event = new Event(req.body);
	event.endDate = moment().format('DD.MM.YYYY');
	event.update(event, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});
});

function filter(req, res, next) {
	var query = filterQuery(req.query);

	Event
		.find(query)
		.exec()
		.then(function(result) {
			res.json(result);
  	});
}

function filterQuery(query) {
	var conditions = {};
	/*
	if (query.status) {
		var status = query.status;
		if ('CREATED' === status) {
			conditions.date = { $gte: moment().toDate() };
		} else if ('FNS' === status) {
			conditions.date = { $le: moment().toDate() };
		}
	} else {
		conditions.date = { $gte: moment().toDate() };
	}
	*/
	if (query.name) {
		conditions.name = new RegExp(query.name, 'i');
	}
	if (query.section) {
		conditions['ames.section'] = query.section;
	}
	//console.log(conditions);
	return conditions;
}

module.exports = router;
