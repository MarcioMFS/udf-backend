const SessionService = require('../services/SessionService');

exports.list = async (req, res, next) => {
  try {
    const sessions = await SessionService.list();
    res.json(sessions);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const session = await SessionService.create(req.body);
    res.status(201).json(session);
  } catch (err) {
    next(err);
  }
};
