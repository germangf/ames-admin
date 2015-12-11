var mongoose = require('mongoose');
var moment = require('moment');

var MemberSchema = new mongoose.Schema({
  name: String,
  surnames: String,
  email: String,
  phone: String,
  birthday: Date,
  nationality: String,
  inSwizertlandSince: String,
  job: {
    title: String,
    company: String
  },
  startDate: { type: Date, default: moment().toDate() },
  startYear: { type: String, default: moment().format('YYYY') },
  endDate: Date,
  address: {
    street: String,
    plz: Number,
    city: String,
    canton: String
  },
  ames: {
    motivation: String,
    contribution: String,
    how: String,
    associations: String,
    section: String,
    quoteYear: String
  },
  education: {
    level: String,
    degree: String,
    languages: {
      swiss: String,
      german: String,
      french: String,
      italian: String,
      english: String,
      others: String
    }
  },
  maritalStatus: String,
  childrenNr: Number,
  hobbies: String,
  facebook: {
    access: Boolean,
    user: String
  }
});

mongoose.model('Member', MemberSchema);
