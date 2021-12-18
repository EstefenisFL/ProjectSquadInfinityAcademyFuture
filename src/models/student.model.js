'use strict';
var dbConn = require('./../../config/db.config');

var Aluno = function (aluno) {
    this.aluno_nome = aluno.aluno_nome;
    this.aluno_idade = aluno.aluno_idade;
    this.aluno_sexo = aluno.aluno_sexo;
    this.aluno_endereco = aluno.aluno_endereco;
    this.aluno_cpf = aluno.aluno_cpf;
    this.aluno_rg = aluno.aluno_rg;
    this.aluno_data_nasc = aluno.aluno_data_nasc;
    this.aluno_tel = aluno.aluno_tel;
    this.plano_id_plano = aluno.plano_id_plano;
    this.status_id_status = aluno.status_id_status;
};

Aluno.create = function (newAluno, result) {
    dbConn.query("INSERT INTO saudemais.aluno set ?", newAluno, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


Aluno.findById = function (id, result) {
    dbConn.query("select * from saudemais.aluno where id_aluno = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Aluno.findAll = function (result) {
    dbConn.query("select * from saudemais.aluno", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('aluno : ', res);
            result(null, res);
        }
    });
};

Aluno.update = function (id, aluno, result) {
    console.log(aluno);
    console.log(id);
    const sql = `UPDATE
                    saudemais.aluno
                SET
                    aluno_nome=?,
                    aluno_idade=?,
                    aluno_sexo=?, 
                    aluno_endereco=?, 
                    aluno_cpf=?, 
                    aluno_rg=?, 
                    aluno_data_nasc=?, 
                    aluno_tel=?, 
                    plano_id_plano=?, 
                    status_id_status=? 
                WHERE 
                    id_aluno=?`
    dbConn.query(sql, [aluno.aluno_nome, aluno.aluno_idade, aluno.aluno_sexo, aluno.aluno_endereco, aluno.aluno_cpf, aluno.aluno_rg, aluno.aluno_data_nasc, aluno.aluno_tel, aluno.plano_id_plano, aluno.status_id_status, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
            console.log(res);
        }
    });
};

Aluno.delete = function (id, result) {
    dbConn.query("DELETE FROM saudemais.aluno WHERE id_aluno = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Aluno;