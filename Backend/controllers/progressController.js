const Progress = require('../models/Progress');

exports.addProgress = async (req, res) => {
  try {
    const { user, weight, calories } = req.body;
    const newProgress = new Progress({ user, weight, calories });
    const progress = await newProgress.save();
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getProgress = async (req, res) => {
  try {
    const { userId } = req.params;
    const progress = await Progress.find({ user: userId });
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
