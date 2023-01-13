const { query } = require('express');
const express = require('express')
const router = express.Router();

const conn = require('../util/database')

router.post('/postInfo',async (req,res)=>{
conn.query('SELECT categorie,dayPrice FROM cars WHERE cars.model=?',[req.body.model_voiture],(err,result)=>{
    console.log(req.body)
    if(!err){
        const categorie = result[0].categorie
        var dayPrice = result[0].dayPrice
        console.log(categorie + ' ' + dayPrice )
        conn.query('SELECT nom,prenom FROM users WHERE users.email=?',[req.body.email],(err,result)=>{

            if(!err){
           // const {nom , prenom } = result[0]
           const nom = result[0].nom
           const prenom = result[0].prenom

         function  datediff(first, second) {    
            var Difference_In_Time = second.getTime() - first.getTime();    
            return Difference_In_Time / (1000 * 3600 * 24);;
          }
         function parseDate(str) {
            var mdy = str.split('-');
            console.log(mdy,new Date(mdy[2], mdy[0] - 1, mdy[1]))
            return new Date(`${mdy[0]}/${mdy[1]}/${mdy[2]}`)  
          }
          var jour = datediff(parseDate(req.body.date_de_depart), parseDate(req.body.date_de_retour))
          const price = dayPrice * jour

       


   conn.query('INSERT INTO les_reservation (lieu_de_depart,date_de_depart,heure_de_depart,lieu_de_retour,heure_de_retour,date_de_retour,model_voiture,categorie,price,email,nom,prenom,age_permis,tel) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
   [req.body.lieu_de_depart,req.body.date_de_depart,req.body.heure_de_depart,
    req.body.lieu_de_retour,req.body.heure_de_retour,req.body.date_de_retour,
    req.body.model_voiture,categorie,price,req.body.email,nom,prenom,req.body.age_permis,req.body.tel
] , (err,result)=>{
 if(!err){res.json({message:"resercation registred"} )
 console.log(result)
}else{res.json(err)}
})               
        }else{
                console.log(err)
            }
        })  
    }else{
       console.log(err)
    }
})
})



router.get('/getReservation', async(req,res)=>{
  conn.query("SELECT * FROM les_reservation", (err,result)=>{
    if(!err){
    res.status(200).send(result)
    }else{
        console.log(err)
    }
  })  
})









module.exports = router