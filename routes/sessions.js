const express = require('express');
const controller = require('../controllers/sessionController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sessions
 *   description: Session management
 */

/**
 * @swagger
 * /sessions:
 *   get:
 *     summary: List all sessions
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: A list of sessions
 *   post:
 *     summary: Create a new session
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Session created
 */

router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;
