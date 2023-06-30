const {
  createDisclaimer,
  getDisclaimerById,
  updateDisclaimer,
  deleteDisclaimer,
  listDisclaimers
} = require('./disclaimersControllers');

const {
  createAcceptance,
  listAcceptances
} = require('./acceptanceControllers');


module.exports = {
  createDisclaimer,
  getDisclaimerById,
  updateDisclaimer,
  deleteDisclaimer,
  listDisclaimers,
  createAcceptance,
  listAcceptances
}