require('dotenv').config()

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const uri = process.env.MONGO_DB_URI

module.exports = {
  username,
  password,
  uri
};