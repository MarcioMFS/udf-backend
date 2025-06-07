const ClassroomService = require('../services/ClassroomService');

exports.list = async (req, res, next) => {
  try {
    const classrooms = await ClassroomService.list();
    res.json(classrooms);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const classroom = await ClassroomService.create(req.body);
    res.status(201).json(classroom);
  } catch (err) {
    next(err);
  }
};
