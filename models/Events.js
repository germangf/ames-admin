var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
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
EventSchema.plugin(mongoosePaginate);

mongoose.model('Event', EventSchema);
