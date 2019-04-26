const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String},
  displayName: {type: String},
  challenge: {type: String},
});

module.exports = mongoose.model('webauthn', userSchema);
