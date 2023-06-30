const Disclaimer = require('../models/disclaimerModel');

// Create Disclaimer
exports.createDisclaimer = async (req, res) => {
  try {
    const disclaimer = new Disclaimer(req.body);
    await disclaimer.save();
    res.status(201).json({
      message: 'Disclaimer created successfully',
      data: disclaimer,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Disclaimer by ID
exports.getDisclaimerById = async (req, res) => {
  try {
    const disclaimer = await Disclaimer.findById(req.params.id);
    if (!disclaimer) {
      return res.status(404).json({ message: 'Disclaimer not found' });
    }
    res.status(200).json({ data: disclaimer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Disclaimer
exports.updateDisclaimer = async (req, res) => {
  try {
    const updatedDisclaimer = await Disclaimer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDisclaimer) {
      return res.status(404).json({ message: 'Disclaimer not found' });
    }
    res.status(200).json({ message: 'Disclaimer updated successfully', data: updatedDisclaimer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Disclaimer
exports.deleteDisclaimer = async (req, res) => {
  try {
    const disclaimer = await Disclaimer.findByIdAndDelete(req.params.id);
    if (!disclaimer) {
      return res.status(404).json({ message: 'Disclaimer not found' });
    }
    res.status(200).json({ message: 'Disclaimer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// List Disclaimers
exports.listDisclaimers = async (req, res) => {
  try {
    let disclaimers;
    if (req.query.text) {
      disclaimers = await Disclaimer.find({ text: req.query.text });
    } else {
      disclaimers = await Disclaimer.find();
    }
    res.status(200).json({ data: disclaimers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};