const Acceptance = require('../models/AcceptanceModel');

exports.createAcceptance = async (req, res) => {
  try {
    const acceptance = new Acceptance(req.body);
    await acceptance.save();
    res.status(201).json({
      message: 'Acceptance created successfully',
      data: acceptance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listAcceptances = async (req, res) => {
  try {
    let acceptances;
    if (req.query.user_id) {
      acceptances = await Acceptance.find({ user_id: req.query.user_id });
    } else {
      acceptances = await Acceptance.find();
    }
    res.status(200).json({ data: acceptances });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};