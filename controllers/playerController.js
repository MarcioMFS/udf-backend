const PlayerService = require('../services/PlayerService');

exports.list = async (req, res, next) => {
  try {
    const players = await PlayerService.list();
    res.json(players);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const player = await PlayerService.create(req.body);
    res.status(201).json(player);
  } catch (err) {
    next(err);
  }
};
