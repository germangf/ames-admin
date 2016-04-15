var mongoose = require('mongoose');
var moment = require('moment');

var EventSchema = new mongoose.Schema({
  creationDate: { type: Date, default: moment().toDate() },
  name: String,
  type: String,
  personInCharge: String,
  section: String,
  location: String,
  date: Date,
  personWhoExecutes: String
});

mongoose.model('Event', EventSchema);
