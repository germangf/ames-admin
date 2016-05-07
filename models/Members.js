var mongoose = require('mongoose');
var moment = require('moment');

var MemberSchema = new mongoose.Schema({
  status: {
    type: String, 
    default: 'NO_MEMBER',
    enum: ['MEMBER', 'NO_MEMBER', 'EX_MEMBER']
  },
  quoteYear: String,
  creationDate: { type: Date, default: moment().toDate() },
  name: String,
  email: String,
  phone: String,
  birthday: Date,
  nationality: String,
  inSwitzerlandSince: Date,
  job: {
    title: String,
    company: String
  },
  startDate: { type: Date, default: moment().toDate() },
  startYear: { type: String, default: moment().format('YYYY') },
  endDate: { type: Date },
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
