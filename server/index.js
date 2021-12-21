const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors")
/*
app.get('/', (req, res) =>{
		res.send('Hello Word');
});
*/


/*
const db = mysql.createPool({
	host:"localhost",
	user:"root",
	password:"",
	database:"saudemais",

});
*/

const db = mysql.createPool({
	host:'166.48.214.158',
	user:'saudemais',
	password:'saudemais',
	database:'saudemais',
});


app.get('/', (req, res) =>{
	const sqlInsert = "INSERT INTO Aluno (aluno_nome, aluno_idade) VALUES ('Fernando', '25')";
		
				db.query(sqlInsert, (err, result)=>{
							console.log(err);

						})
	res.send('Hello');
});

app.use(cors());
app.use(express.json());


app.listen(3000,function(){
	console.log('server running on port 3000')
});
