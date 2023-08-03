'use strict';

var response = require('./rest');
var koneksi = require('./koneksi');
const e = require('express');

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

exports.tampilberdasarkanid = function(req,res){
    let id =req.params.id;
    koneksi.query('SELECT * FROM mahasiswa where id = ?',[id],
    function(error,rows,fields){
        if (error) {
            console.log(error)
        }else{
            response.ok(rows,res);
        }
    });
}

//menambahkan data mahasiswa

exports.tambahMahasiswa = function(req,res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    koneksi.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',[nim,nama,jurusan],
    function(error,rows,field){
        if (error) {
            console.log(error);
        }else{
            response.ok('Berhasil menambahkan data',res);
        }
    });
}

exports.rubahdataberdasarkanid = function(req,res){
    var id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    koneksi.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? where id = ?',[nim,nama,jurusan,id],
    function(error,rows,fields){
        if (error) {
            console.log(error);
        }else{
            response.ok('Berhasil Merubah data',res)
        }
    })

}

exports.hapusMahasiswa = function(req,res){
    var id = req.body.id;

    koneksi.query('DELETE FROM mahasiswa WHERE id = ?',[id],
    function(error,rows,field){
        if (error) {
            console.log(error);
        }else{
            response.ok('Berhasil hapus Mahasiswa',res);
        }
    })
}