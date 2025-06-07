const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Instructor = require('./Instructor');

const Classroom = sequelize.define('Classroom', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  code: { type: DataTypes.STRING, allowNull: false },
  instructor_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'classrooms',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Instructor.hasMany(Classroom, { foreignKey: 'instructor_id' });
Classroom.belongsTo(Instructor, { foreignKey: 'instructor_id' });

module.exports = Classroom;
