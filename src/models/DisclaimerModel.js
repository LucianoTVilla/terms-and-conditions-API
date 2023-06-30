const mongoose = require('mongoose');
const { Schema } = mongoose;

const disclaimerSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  text: { 
    type: String, 
    required: true 
  },
  version: { 
    type: String, 
    required: true 
  },
  create_at: { 
    type: Date, 
    default: Date.now 
  },
  update_at: { 
    type: Date, 
    default: Date.now 
  },
}, { timestamps: true });

const Disclaimer = mongoose.model('Disclaimer', disclaimerSchema);


module.exports = Disclaimer;