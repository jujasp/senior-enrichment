'use strict'

const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Campus = models.Campus;

module.exports = router;

router.get('/', (req, res, next) =>{
    Campus.findAll({include: [{all: true}]})
    .then((campuses) => {
        res.json(campuses)
    })
    .catch(next)
});

