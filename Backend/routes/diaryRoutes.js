const express = require('express');
const { addDiaryEntry, getDiaryEntries, deleteDiaryEntry } = require('../controllers/diaryController');
const router = express.Router();

router.post('/', addDiaryEntry);
router.get('/:userId', getDiaryEntries);
router.delete('/:entryId', deleteDiaryEntry);

module.exports = router;
