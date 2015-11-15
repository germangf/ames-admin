var mongoose = require('mongoose');
var moment = require('moment');

var MemberSchema = new mongoose.Schema({
  name: String,
  surnames: String,
  email: String,
  phone: String,
  birthday: String,
  nationality: String,
  inSwizertlandSince: String,
  job: {
    title: String,
    company: String
  },
  startDate: { type: String, default: moment().format('DD.MM.YYYY') },
  startYear: { type: String, default: moment().format('YYYY') },
  endDate: String,
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
