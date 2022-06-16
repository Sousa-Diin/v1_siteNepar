const express = require('express')
const mysql = require('mysql')


//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'neparteste1'
})

//connect to mysql
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL Connected");
});

const app = express();

//create Database
/*
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nepar2";
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send("Database Created");
    });
});
*/

//user precisa se relacionar com os dados dele na UFLA (curso, matricula, email institucional...)
//user precisa de relacionar com a diretoria do nucleo
//projetos
//puniçoes(warnings)
//pontos

//CREATE
app.get('/createuser', (req, res) => {
    let post = {nome: 'Juscelino', email: 'juscelino@jowlen.com', phone: '33346978', password_hash: 'naotemsenha', date_birth: "1999-8-25", adm: '1', graduate_id: '2', created_at: dateTime, updated_at: dateTime}
    let sql = 'INSERT INTO users SET ?'
    let query = db.query(sql, post, err => {
        if(err) {
            throw err
        }
        res.send('User Criado')
    })
})

app.get('/createproject', (req, res) => {
    let post = {id: '8', title: 'Braco Mecanico', descricao: 'Braco mecanizado', start_date:"2021-7-16", end_date: "2021-11-18", created_by: 'Joaozinho', updated_by: 'Joaozinho', deleted_by: '',created_at: dateTime, updated_at: dateTime}
    let sql = 'INSERT INTO projects SET ?'
    let query = db.query(sql, post, err => {
        if(err) {
            throw err
        }
        res.send('Projeto Criado')
    })
})


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

//SHOW
app.get('/getusers', (req, res) => {
    let sql = 'SELECT * FROM users'
    let query = db.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        console.log('User details fetched')
        res.send(results)
    })
})

app.get('/getprojects', (req, res) => {
    let sql = 'SELECT * FROM projects'
    let query = db.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        console.log('Projects details fetched')
        res.send(results)
    })
})

//UPDATE
app.get('/updateuser/:id', (req, res) => {
    let newNome = 'Andrezinho'
    let sql = `UPDATE users SET nome = '${newNome}', updated_at = '${dateTime}' WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('user updated')
    })
})

app.get('/updateproject/:id', (req, res) => {
    let newTitle = 'Servidor'
    let sql = `UPDATE projects SET title = '${newTitle}', updated_at = '${dateTime}' WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('project updated')
    })
})

//DELETE
app.get('/deleteuser/:id', (req, res) => {
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('user deleted')
    })
})

app.get('/deleteproject/:id', (req, res) => {
    let sql = `DELETE FROM projects WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('project deleted')
    })
})

app.listen('3000', () => {
    console.log('Server Started on port 3000')
})