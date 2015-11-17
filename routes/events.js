var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var moment = require('moment');

require('../models/Events');
var Event = mongoose.model('Event');

router.get('/', function(req, res, next) {
	Event.find(function(err, events) {
		if (err) {
			return next(err);
		}
	  res.json(events);
	});
});

router.get('/pending', function(req, res, next) {
	Event.find({ date: { $gte: moment().toDate() } }, function(err, events) {
		if (err) {
			return next(err);
		}
	  res.json(events);
	});
});

router.get('/:id', function(req, res, next) {
	Event.find({ '_id': req.params.id }, function(err, event) {
		if (err) {
			return next(err);
		}
	  res.json(event);
	});
});

router.post('/', function(req, res, next) {
	var event = new Event(req.body);
	console.log(event);
	event.save(function(err, event) {
		if (err) {
			return next(err);
		}
	  res.json(event);
	});
});

router.put('/', function(req, res, next) {
	var event = new Event(req.body);
	event.update(event, function(err, result) {
		if (err) {
			return next(err);
		}
	  res.json(result);
	});
});

router.put('/:id', function(req, res, next) {
	var event = new Event(req.body);
	event.endDate = moment().format('DD.MM.YYYY');
	event.update(event, function(err, result) {
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

	Event.find({ $and: conditions }, function(err, events) {
		console.log(err);
		console.log(events);
		if (err) {
			return next(err);
		}
	  res.json(events);
	});
});

module.exports = router;
