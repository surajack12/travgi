var express = require('express');
var Router = express.Router();
var path = require('path')
var multer = require('multer');
  // this is how image upload in node api






 var storeaadhar =multer.diskStorage({
     destination:(req,file,cb)=>{
         cb(null,'../docs/aadhar');
     },
     filename:(req,file,cb)=>{
         cb(null,'adr'+Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(file.originalname))
         console.log(path.extname(file.originalname))
     }
 })
 var upaadhar = multer({storage:storeaadhar}).single('aadhar');
                                   //name of field to upload
 Router.post('/upaadhar',(req,res,next)=>{
    upaadhar(req,res,(err)=>{
        if(err instanceof multer.MulterError){
            return res.status(500).json(err)
        }else if(err){
            return  res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })

  
 })
 Router.get('/',(req,res,err)=>{
     console.log('APi call');
     res.send('Api call')
 })


module.exports = Router;