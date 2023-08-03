var mysql = require('mysql');

//koneksidb

const koneksi = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'db_rest_api'
});

koneksi.connect((err) => {
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = koneksi;