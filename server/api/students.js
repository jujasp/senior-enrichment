'use strict'

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Student = models.Student;

module.exports = router;

router.get('/', (req, res, next) =>{
    Student.findAll({include: [{all: true}]})
    .then((students) => {
        res.json(students)
    })
    .catch(next)
});

router.get('/:studentId', (req, res, next) => {
    Student.findOne({
        include: [{all: true}],
        where: {
            id: req.params.studentId
        }
    })
    .then((student) => {
        res.json(student)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Student.create(req.body)
        .then(student => res.json(student))
        .catch(next);
})

router.put('/:studentId', (req, res, next) => {
    Student.findOne({
        where: {id: req.params.studentId}
    })
    .then(student => student.update(req.body))
    .then(student => res.json({message: "Update Successful", student: student}))
    .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
    const id = req.params.studentId

    Student.destroy({where: {id}})
    .then(() => res.send("Successful deletion"))
    .catch(next)
})