var express = require('express');
var Router = express();
var path = require('path')
var multer = require('multer');
var mysql = require('mysql')
var bodyParser = require('body-parser');





var conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'artifexcompletedb'
 });


 Router.use(bodyParser.json());
 Router.use(bodyParser.urlencoded({ extended: false })); 

 

// var conn =mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'artifexcompletedb'
//  });


 Router.use(bodyParser.json());
 Router.use(bodyParser.urlencoded({ extended: false })); 




  // this is how image upload in node api






 var storeaadhar =multer.diskStorage({
     destination:(req,file,cb)=>{
         cb(null,'./aadhars');
     },
     filename:(req,file,cb)=>{
         cb(null,'adr'+Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(file.originalname))
     }
 })
 var upaadhar = multer({storage:storeaadhar});
                                   //name of field to upload
 Router.post('/upAadhar',upaadhar.single('adrname'),(req,res,next)=>{
     var imgname= req.file.filename;
     console.log(imgname);
 })



module.exports = Router;