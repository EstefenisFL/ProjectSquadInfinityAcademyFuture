'use strict';
const Aluno = require('../models/student.model');

exports.findAll = function (req, res) {
    Aluno.findAll(function (err, aluno) {
        if (err)
            res.send(err);
        console.log('res', aluno);
        res.send(aluno);
    });
};

exports.create = function (req, res) {
    const new_student = new Aluno(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Aluno.create(new_student, function (err, aluno) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Student added successfully!", data: aluno });
        });
    }
};

exports.findById = function (req, res) {
    Aluno.findById(req.params.id, function (err, aluno) {
        if (err)
            res.send(err);
        res.json(aluno);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Aluno.update(req.params.id, new Aluno(req.body), function (err, aluno) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Student successfully updated', data: aluno });
        });
    }
};

exports.delete = function (req, res) {
    Aluno.delete(req.params.id, function (err, aluno) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Student successfully deleted' });
    });
};