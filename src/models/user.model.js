'use strict';
var dbConn = require('../../config/db.config');

var Pessoa = function (user) {
    this.user_nome = user.user_nome;
    this.user_sexo = user.user_sexo;
    this.user_endereco = user.user_endereco;
    this.user_cpf = user.user_cpf;
    this.user_data_nasc = user.user_data_nasc;
    this.user_tel = user.user_tel;
    this.plano_id_plano = user.plano_id_plano;
    this.status_id_status = user.status_id_status;
    this.user_is = user.user_is;
};

Pessoa.create = function (newPessoa, result) {
    dbConn.query("INSERT INTO saudemais.user set ?", newPessoa, function (err, res) {
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

Pessoa.findById = function (id, result) {
    dbConn.query("select * from saudemais.user where id_user = ?", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Pessoa.findAll = function (result) {
    dbConn.query("select * from saudemais.user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('pessoa : ', res);
            result(null, res);
        }
    });
};

Pessoa.update = function (id, user, result) {
    const sql = `UPDATE
                    saudemais.user
                SET
                    user_nome=?,
                    user_sexo=?, 
                    user_endereco=?, 
                    user_cpf=?,  
                    user_data_nasc=?, 
                    user_tel=?, 
                    plano_id_plano=?, 
                    status_id_status=?,
                    user_is=? 
                WHERE 
                    id_user=?`
    dbConn.query(sql, [user.user_nome, user.user_sexo, user.user_endereco, user.user_cpf, user.user_data_nasc, user.user_tel, user.plano_id_plano, user.status_id_status, user.user_is, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
            console.log(res);
        }
    });
};

Pessoa.delete = function (id, result) {
    dbConn.query("DELETE FROM saudemais.user WHERE id_user=?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Pessoa;