var express = require('express');
var router = express();
var multer = require('multer');
var mysql = require('mysql')
var bodyParse = require('body-parser')




var conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'artifexcompletedb'
 });


 Router.use(bodyParser.json());
 Router.use(bodyParser.urlencoded({ extended: false })); 

 

var conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'artifexcompletedb'
 });


 Router.use(bodyParser.json());
 Router.use(bodyParser.urlencoded({ extended: false })); 


