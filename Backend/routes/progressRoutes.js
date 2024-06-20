const express = require('express');
const { addProgress, getProgress } = require('../controllers/progressController');
const router = express.Router();

router.post('/', addProgress);
router.get('/:userId', getProgress);

module.exports = router;
