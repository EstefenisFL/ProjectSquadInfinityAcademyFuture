const express = require('express');
const app = express();
const mysql = require("mysql");

/*
app.get('/', (req, res) =>{
		res.send('Hello Word');
});
*/

app.listen(3000,function(){
	console.log('server running on port 3000')
});



const db = mysql.createPool({
	host:"https://mysql.academiasaudemais.com.br/",
	user:"saudemais",
	password:"saudemais",
	database:"saudemais",

});


app.get('/', (req, res) =>{
	const sqlInsert = "INSERT INTO Aluno (aluno_nome,aluno_idade) VALUES ('Pedro', '32');"
		db.query(sqlInsert, (err, result)=>{
		})
	res.send('Hello Word');
});




