var mongoose = require('mongoose');
var moment = require('moment');

var EventSchema = new mongoose.Schema({
  name: String,
  type: String,
  personInCharge: String,
  section: String,
  location: String,
  date: Date,
  personWhoExecutes: String
});

mongoose.model('Event', EventSchema);
