const express = require('express');
const router = express.Router();
const { getExamples, addExample } = require('../controllers/exampleController');

router.get('/', getExamples);
router.post('/', addExample);

module.exports = router;
