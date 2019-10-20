const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  city: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    max: 9999999999,
  },
  gender: {
    type: String,
  },
  housingType: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  ethnicity: {
    type: [String],
  },
  selfStatus: {
    type: [String],
  },
  education: {
    type: String,
  },
  primaryLanguage: {
    type: String,
  },
  dentalInsurance: {
    type: Boolean,
  },
  primaryDoctor: {
    type: Boolean,
  },
  employmentType: {
    type: String,
  },
  monthlyIncomeAmount: {
    type: Number,
  },
  monthlyIncomeType: {
    type: [String],
  },
  medicalInsurance: {
    type: String,
  },
  childCareType: {
    type: String,
  }
});

userSchema.statics.findByUserName = async function(username) {
  let user = await this.findOne({
    username: username,
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

module.exports = {
  'User' : User
}
