const express = require('express');
const controller = require('../controllers/playerController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Players
 *   description: Player management
 */

/**
 * @swagger
 * /players:
 *   get:
 *     summary: List all players
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: A list of players
 *   post:
 *     summary: Create a new player
 *     tags: [Players]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Player created
 */

router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;
