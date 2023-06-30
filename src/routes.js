const express = require('express');

const validateDisclaimer = require('./middlewares/validateDisclaimer');
const validateAcceptance = require('./middlewares/validateAcceptance');

const {
  createDisclaimer,
  getDisclaimerById,
  updateDisclaimer,
  deleteDisclaimer,
  listDisclaimers,
  createAcceptance,
  listAcceptances
} = require('./controllers')

const routes = express.Router();

//DISCLAIMERS
routes.post('/disclaimers', validateDisclaimer, createDisclaimer);
routes.get('/disclaimers/:id', getDisclaimerById);
routes.put('/disclaimers/:id', validateDisclaimer, updateDisclaimer);
routes.delete('/disclaimers/:id', deleteDisclaimer);
routes.get('/disclaimers', listDisclaimers);

//ACCEPTANCES
routes.post('/acceptances', validateAcceptance, createAcceptance);
routes.get('/acceptances', listAcceptances);


module.exports = routes