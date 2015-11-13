var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  name: String,
  surnames: String,
  email: String,
  phone: String,
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
    section: String
  },
  birthday: Date,
  maritalStatus: String,
  childrenNr: Number,
  nationality: String,
  inSwizertlandSince: Date,
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
  job: {
    title: String,
    company: String
  },
  facebook: {
    access: Boolean,
    user: String
  },
  hobbies: String
});

mongoose.model('Member', MemberSchema);
