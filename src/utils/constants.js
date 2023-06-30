require('dotenv').config()

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;

module.exports = {
  username,
  password
};