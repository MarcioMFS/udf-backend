const express = require('express');
const controller = require('../controllers/sessionController');
const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;
