const Session = require('../models/Session');

const list = () => Session.findAll();
const create = (data) => Session.create(data);

module.exports = { list, create };
