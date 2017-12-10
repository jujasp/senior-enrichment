'use strict'
const Sequelize = require("sequelize");
const db = require('../../db');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://2qqce331qbpvuwhs03ipa6o4-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/Salk-Institute-San-Diego-Louis-Kahn-66-shulman-getty-250x250.jpg'
    },

    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus;
