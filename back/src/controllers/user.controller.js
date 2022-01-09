'use strict';
const Pessoa = require('../models/user.model');

exports.findAll = function (req, res) {
    Pessoa.findAll(function (err, user) {
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
};

exports.create = function (req, res) {
    const new_user = new Pessoa(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Pessoa.create(new_user, function (err, user) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Person added successfully!", data: user });
        });
    }
};

exports.findById = function (req, res) {
    Pessoa.findById(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Pessoa.update(req.params.id, new Pessoa(req.body), function (err, user) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Person successfully updated', data: user });
        });
    }
};

exports.delete = function (req, res) {
    Pessoa.delete(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Person successfully deleted', user });
    });
};