var mysql = require('mysql');
var conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'traji'
 });

 conn.connect((err)=>{
     if(err) console.log('Error in Database connection');
     else console.log('Database connected');
 })

 module.exports= conn;