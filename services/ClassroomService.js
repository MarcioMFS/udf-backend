const Classroom = require('../models/Classroom');

const list = () => Classroom.findAll();
const create = (data) => Classroom.create(data);

module.exports = { list, create };
