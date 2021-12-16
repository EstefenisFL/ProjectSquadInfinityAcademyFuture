'use strict';
var dbConn = require('./../../config/db.config');

//aluno object create
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

//funcionando
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

//funcionando
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

// Aluno.update = function (id, aluno, result) {
//     dbConn.query("UPDATE aluno SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         } else {
//             result(null, res);
//         }
//     });
// };

Aluno.delete = function (id, result) {
    dbConn.query("DELETE FROM aluno WHERE id = ?", [id], function (err, res) {
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