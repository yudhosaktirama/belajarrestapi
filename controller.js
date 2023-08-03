'use strict';

var response = require('./rest');
var koneksi = require('./koneksi');

exports.index = function(req,res){
    response.ok('Aplikasiku berjalan');
}