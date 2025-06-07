const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Classroom = require('./Classroom');

const Session = sequelize.define('Session', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  classroom_id: { type: DataTypes.INTEGER, allowNull: false },
  session_data: { type: DataTypes.JSON, allowNull: false },
}, {
  tableName: 'sessions',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Classroom.hasMany(Session, { foreignKey: 'classroom_id' });
Session.belongsTo(Classroom, { foreignKey: 'classroom_id' });

module.exports = Session;
