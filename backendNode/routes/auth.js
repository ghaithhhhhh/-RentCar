const express = require('express')
const {body, Result} = require('express-validator')
const bcrypt = require('bcryptjs')
const router = express.Router();
const User = require('../models/user')
const autoController = require('../controller/Auth')
const conn = require('../util/database')
const errorController = require('../controller/error')
const jwt = require('jsonwebtoken')

const Cryptr = require('cryptr');
var cryptr = new Cryptr('devann')

router.post('/signUp',
(req,res)=>{


    var sql = "SELECT * FROM users WHERE email = ?";
    conn.query(sql, [req.body.email] ,async function  (err, result) {
         if (err) {console.log(err)};
         console.log(result.length)
         if(result.length > 0){
          console.log('ok')
          res.send({status:"eroor",error:"email already has been registres"})
         }else{
         let role = 'user'
      let  pass  = cryptr.encrypt(req.body.password)
      console.log(pass)
        conn.query('INSERT INTO users (nom,prenom,email,password,role) VALUES(?,?,?,?,?)',[req.body.prenom,req.body.nom,req.body.email,req.body.password,role],(err,result)=>{
            if(!err){
                res.send({message:'user registred'})
            }
            else{
             console.log('err')
            }})


         }



         })







}
















        
)


router.get('/data', async (req,res)=>{
    console.log("enter")
conn.query('SELECT * FROM users',async function(err,rows,fields){
    if(!err){
        console.log(rows + 'ok')
    res.json(rows)
    }else{
        console.log(err)
    }

})
}  )


router.post('/signin',async(req,res)=>{
 // pass = bcrypt.decodeBase64(password , 12)
    conn.query('SELECT nom,role FROM users WHERE email=? and password=?',[req.body.email,req.body.password],async function(err,rows,fields){
        if(!err){
        
              if(rows.length>0){
                let data = JSON.stringify(rows[0])
                const token = jwt.sign(data,'stil')
                res.json({token})
              }else{
                res.json("user n'existe pas")
              }
        }else{
            console.log(err)
        }
    
    }) 
}
)

router.post('/test', verifytoken ,async (req,res)=>{
    console.log(req.data)
    res.json("test okay")
})


function verifytoken(req,res,next){
  
if(!req.headers.authorization) {
    return res.satus(401).json('no autorization')
}    

const token = req.headers.authorization.substr(7)
if(token!==''){
  const content =  jwt.verify(token,'stil')
  req.data = content
  next()
}else{
     res.status(401).json('empty token')
}




} 





module.exports = router

