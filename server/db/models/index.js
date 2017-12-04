'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations
const db = require.require('../db')
const Student = require('./student')
const Campus = require('./campus')

Student.belongsTo(Campus) // student now has campusId on model
Campus.hasMany(Student) ///campus has getStudent, setStudent functions

module.exports = {
	db,
	Student,
	Campus
}
