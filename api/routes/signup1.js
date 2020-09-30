var express = require('express');
var mysql =require('mysql')
var router = express.Router();
var conn = require('../mysqlconn');
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
// var conn =mysql.createConnection({
//     host:'cloud.sistec.ac.in',
//     user:'suraj',
//     password:'suraj12345',
//     database:'surajsahu'
// });



router.get('/', function(req, res, next) {
    res.send('API is working properly');
});
router.post('/',(req,res,err)=>{
  var bodyData = req.body;

   
   
   var a= new Date();
   var uuid =   Math.floor(Math.random()*1000) +  a.getTime();
   try {
       
   
   conn.query(`insert into triji_signup_1 (uuid,name,email,phone_num) values(${uuid},${mysql.escape(bodyData.name)},${mysql.escape(bodyData.email)},${mysql.escape(bodyData.phone)})`,(error,result,fields)=>{
       if(error) res.status(500).json({code:0,status:'Error'});
       res.status(200).json({code:1,status:'We are sending you an OTP.',response:result})
   })
} catch (error) {
       console.log('Error in query!!!');
       res.status(404).json({code :0,status:'error'});
}
   
})

module.exports = router;