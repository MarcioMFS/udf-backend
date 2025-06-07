const InstructorService = require('../services/InstructorService');

exports.list = async (req, res, next) => {
  try {
    const instructors = await InstructorService.list();
    res.json(instructors);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const instructor = await InstructorService.create(req.body);
    res.status(201).json(instructor);
  } catch (err) {
    next(err);
  }
};
