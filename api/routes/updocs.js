const express = require('express');
const Router= express();
const multer = require('multer');
const mysql = require('mysql');
const path = require('path');
const {Validator} =require('node-input-validator');
const bodyParser =require('body-parser');




var conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'artifexcompletedb'
 });


 Router.use(bodyParser.json());
 Router.use(bodyParser.urlencoded({ extended: false })); 


 
  var server = Router.listen(3001, "127.0.0.1", function () {
 
    var host = server.address().address
    var port = server.address().port
   
 //    
  console.log("Application listening at http://%s:%s", host, port)
   
 // multer is using to upload files 
  });

 conn.connect(function(err){
    if (err)console.log('Problem in Database Connection');
    else console.log('Mysql connection Established');
   });


   var storage = multer.diskStorage({
     destination: function(req, file, cb) {         
        cb(null, './uploads');
     },
        filename: function (req, file, cb) {
            cb(null , Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(file.originalname) );
        }

    });
var upload = multer({storage:storage});
    Router.post('/profilepicupdate',upload.single('profileImg'),  (req, res, next)=> {
     var imageName=req.file.filename,userId = req.body.userId;
      var qry = 'UPDATE artifexuser SET profilePicURL ="'+imageName +'" where userId ='+userId;
       console.log(qry);
          conn.query(qry, (err,result,fields)=>{
         res.status(200).send(JSON.stringify(result));
         console.log(JSON.stringify(result))
       });
  
  });


   Router.get('/user/profilepage/:id',(req,res)=>{
       var qry ="select  artifexuser.username,artifexuser.email,artifexuser.AccountType,artifexuser.profilePicURL,artifexuser.profileAvtarURL,userdetails.phoneNumber,userdetails.phoneNumberVerify,userdetails.emailVerification,userdetails.websiteName,userdetails.numOfFollower,userdetails.numOfFollowing,userdetails.bioData from artifexuser inner join userdetails on artifexuser.userId =  userdetails.userId  where artifexuser.userId =?";
            conn.query(qry,[req.params.id],function(err,result,fields){
                if (err) throw console.log('Problem Fetching data!!')
                res.send(JSON.stringify(result));
            });
    });



    
Router.post('/insertintouserprofile',(req,res)=>{
    var data = req.body;
     console.log(data);
    const v= new Validator(req.body,{
        email:'required|email|contains:@gmail.com',
        password:'required',
        userName:'required',
        AccountType:'required'
                
        });
       
        v.check().then((match)=>{
           
            if(!match){
                
                   console.log('Error in Recived data fields');
                   try{
                    res.status(422).send(v.errors);
                   } catch(err)
                   {
                    console.log('Posted data is not mached to Requirements');
                   }
    
            }else{
                
                    var qry = "INSERT INTO artifexuser (userName,email,AccountType,password) VALUES ";
                    var values = "("+ mysql.escape(data.userName) +","+ mysql.escape(data.email)+","+mysql.escape(data.AccountType)+","+mysql.escape(data.password)+")"
                    console.log(values);
                    conn.query(qry + values,(err,result)=>{
                        res.send(JSON.stringify(result));
                        console.log(result);
                });
            }
        })

});
   


Router.post('/editprofile' ,(req,res)=>{
    var data = req.body;
    console.log(data);
    var qry= "update artifexuser set  userName = "+mysql.escape(data.userName) +",email ="+mysql.escape(data.email) +" where userId = "+data.userId ;
   console.log(qry);
    conn.query(qry,(err,result)=>{
        var qry2= "update userdetails set  websiteName = "+mysql.escape(data.websiteName) +",bioData ="+mysql.escape(data.bioData) +" where userId = "+mysql.escape(data.userId) ;
       
        conn.query(qry2,(err,result)=>{
            res.status(200).json({ 
                message:"Data inserted",response: true,log:result
            });
        })
    })

    
})
   

