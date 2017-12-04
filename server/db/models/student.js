'use strcit';
const Sequelize = require('sequelize');
const db = require('../../db');

const Student = db.define('student', {

    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    name: {
       type: Sequelize.STRING,
       get() {
           return this.getDataValue('firstName') + this.getDataValue('lastName')
       }
    }
})

module.exports = Student;
