'use strict'

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Campus = models.Campus;

module.exports = router;

router.get('/', (req, res, next) => {
    Campus.findAll({include: [{all: true}]})
    .then((campuses) => {
        res.json(campuses)
    })
    .catch(next)
});

router.get('/:campusId', (req, res, next) => {
    Campus.findOne({
        include: [{all: true}],
        where: {
            id: req.params.campusId
        }
    })
    .then((campus) => {
        res.json(campus)
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
    Campus.create(req.body)
        .then(campus => res.json(campus))
        .catch(next);
})

router.put('/:campusId', (req, res, next) => {
    Campus.findOne({
        where: {id: req.params.campusId}
    })
    .then(campus => campus.update(req.body))
    .then(campus => res.json(campus))
    .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
    const id = req.params.campusId

    Campus.destroy({where: {id}})
    .then(() => res.send("Successful deletion"))
    .catch(next)
})
