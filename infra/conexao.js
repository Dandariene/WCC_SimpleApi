const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Zyyka1987',
    database: 'agendawcc'
});

module.exports = conexao;