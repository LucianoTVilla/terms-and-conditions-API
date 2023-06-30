const express = require('express');
const cors = require('cors');

require('dotenv').config({ path: __dirname + '/.env' })

const routes = require('./routes');
const dbConnection = require('./config/db')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

app.listen(3000, async () => {
  await dbConnection()
  console.log('Service listening on port 3000!')
});