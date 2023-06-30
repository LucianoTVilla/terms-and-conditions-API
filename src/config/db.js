const mongoose = require('mongoose');
const { username, password } = require('../utils/constants');

const uri = `mongodb+srv://luchotest:luchotest@cluster0.rz7urg0.mongodb.net/?retryWrites=true&w=majority`;

module.exports = () => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});