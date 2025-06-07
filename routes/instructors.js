const express = require('express');
const controller = require('../controllers/instructorController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Instructors
 *   description: Instructor management
 */

/**
 * @swagger
 * /instructors:
 *   get:
 *     summary: List all instructors
 *     tags: [Instructors]
 *     responses:
 *       200:
 *         description: A list of instructors
 *   post:
 *     summary: Create a new instructor
 *     tags: [Instructors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Instructor created
 */

router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;
