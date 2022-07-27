const mongoose = require('mongoose');

const calculator = new mongoose.Schema({
  value: String,
  createDatatime: String,
});
exports.mySaveNum = mongoose.model('mySaveNum', calculator);
