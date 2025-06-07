const express = require('express');
const controller = require('../controllers/classroomController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Classrooms
 *   description: Classroom management
 */

/**
 * @swagger
 * /classrooms:
 *   get:
 *     summary: List all classrooms
 *     tags: [Classrooms]
 *     responses:
 *       200:
 *         description: A list of classrooms
 *   post:
 *     summary: Create a new classroom
 *     tags: [Classrooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Classroom created
 */

router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;
