const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Classroom = require('./Classroom');

const Player = sequelize.define('Player', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  classroom_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'players',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Classroom.hasMany(Player, { foreignKey: 'classroom_id' });
Player.belongsTo(Classroom, { foreignKey: 'classroom_id' });

module.exports = Player;
