'use strict';
var dbConn = require('./../../config/db.config');
//aluno object create
var Aluno = function (aluno) {
    this.nome = aluno.aluno_nome;
    this.idade = aluno.aluno_idade;
    this.sexo = aluno.aluno_sexo;
    this.endereco = aluno.aluno_endereco;
    this.cpf = aluno.aluno_cpf;
    this.rg = aluno.aluno_rg;
    this.data_nasc = aluno.aluno_data_nasc;
    this.tel = aluno.aluno_tel;
    this.id_plano = aluno.plano_id_plano;
    this.status_id_status = aluno.status_id_status;
    this.id_aluno = aluno.id_aluno;

};

Aluno.create = function (newAluno, result) {
    dbConn.query("INSERT INTO aluno set ?", newAluno, function (err, res) {
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
    dbConn.query("Select * from aluno where id = ? ", id, function (err, res) {
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
    dbConn.query("Select * from aluno", function (err, res) {
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