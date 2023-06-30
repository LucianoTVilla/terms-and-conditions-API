const mongoose = require('mongoose');
const { username, password, uri } = require('../utils/constants');

const uri = `mongodb+srv://${username}:${password}@${uri}`;

module.exports = () => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});