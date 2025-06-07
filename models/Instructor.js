const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Instructor = sequelize.define('Instructor', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  udf_id: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  payment_status: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: 'instructors',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = Instructor;
