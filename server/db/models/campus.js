'use strict'
const Sequelize = require("sequelize");
const db = require('../db');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: ''
    },

    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus
