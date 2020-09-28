var express = require('express');
var router = express.Router();
var nexmo = require('nexmo');
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.post('/',(req,res,err)=>{
    
})