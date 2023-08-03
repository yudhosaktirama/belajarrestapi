'use strict';

var response = require('./rest');
var koneksi = require('./koneksi');

exports.index = function(req,res){
    response.ok('Aplikasiku berjalan',res);
};


//menampilkan data
exports.tampilsemuadata = function(req,res){
    koneksi.query('SELECT * FROM mahasiswa', function(error,rows,fileds){
        if (error) {
            koneksi.log(error);
        }else {
            response.ok(rows,res);
        }
    });
};