const Instructor = require('../models/Instructor');

const list = () => Instructor.findAll();
const create = (data) => Instructor.create(data);

module.exports = { list, create };
