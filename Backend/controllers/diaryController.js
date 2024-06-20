const DiaryEntry = require('../models/DiaryEntry');

exports.addDiaryEntry = async (req, res) => {
  try {
    const { user, food } = req.body;
    const newEntry = new DiaryEntry({ user, food });
    const entry = await newEntry.save();
    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getDiaryEntries = async (req, res) => {
  try {
    const { userId } = req.params;
    const entries = await DiaryEntry.find({ user: userId }).populate('food');
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteDiaryEntry = async (req, res) => {
  try {
    const { entryId } = req.params;
    await DiaryEntry.findByIdAndDelete(entryId);
    res.json({ msg: 'Entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
