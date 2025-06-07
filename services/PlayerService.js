const Player = require('../models/Player');

const list = () => Player.findAll();
const create = (data) => Player.create(data);

module.exports = { list, create };
