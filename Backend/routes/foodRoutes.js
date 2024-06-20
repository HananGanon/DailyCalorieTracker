const express = require('express');
const { searchFood } = require('../controllers/foodController');
const router = express.Router();

router.get('/search', searchFood);

module.exports = router;
