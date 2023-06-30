const mongoose = require('mongoose');
const { Schema } = mongoose;

const acceptanceSchema = new Schema({
  disclaimer_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Disclaimer', 
    required: true 
  },
  user_id: { 
    type: String, 
    required: true 
  },
  create_at: { 
    type: Date, 
    default: Date.now 
  },
});

const Acceptance = mongoose.model('Acceptance', acceptanceSchema);

module.exports = Acceptance;