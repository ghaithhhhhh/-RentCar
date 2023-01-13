const express = require('express')
const router = express.Router();
const path = require('path');
const conn = require('../util/database')


const multer = require('multer');

//let filename = '';
//var storage = multer.diskStorage(
  //  {
 //       destination:(req,file,cb)=>{
   //        cb(null,'../upload')
     //   },
      //  filename:(req,file,cb)=>{
       //     console.log(file)
        //    cb(null, Date.now() + path.extname(file.originalname))
        // }
   // }
//)
//const mystorage = multer(
  //  {
    //  storage:storage,
   // }
//);

var filename = '';
const mystorage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,'./')
        },
        filename:( req , file , cb )=>{
            let date = Date.now();
            //53453535345.jpg
            // image/png
            // [ 'image', 'png' ]
            console.log(file)
            let fl = date + '.' + file.mimetype.split('/')[1];
            cb(null, fl);
            filename = fl;
        } 
    }
);

const upload = multer({ storage: mystorage })







//hero.image = filename;





router.post('/postCarr',upload.single('file') , (req,res)=>{
    console.log(req.body)
    console.log('okay')
  
    req.body.file = filename
   console.log(req.body.file)
    conn.query('INSERT INTO cars (model,climatisation,boite_vitess,n_place,categorie,energie,nombre_porte,connectivite,image) Values(?,?,?,?,?,?,?,?,?)',[req.body.model,
        req.body.climatisation,req.body.boite_vitess,req.body.n_place,
        req.body.categorie,req.body.energie,
        req.body.nombre_porte,req.body.connectivite,
        req.body.file], async(err,rows,field)=>{
            if(!err){
                res.status(201).json({ message : 'car registred'})
               // res.send(rows)
                filename = ''
            }else{
             console.log(err)
            }
        }
        
        )
       
      
            
          
})


router.get('/getAll', async(req,res)=>{
    
    conn.query('SELECT *FROM cars ',async(err,result)=>{
        if(!err){
        res.status(201).send(result)
    }else{
          console.log(err)  
        }
    })
})

router.get('/getCateCar/:cate', async(req,res)=>{
    console.log(req.params.cate)
    conn.query('SELECT * FROM cars WHERE categorie = ?',[req.params.cate],async(err,result)=>{
        if(!err){
            console.log(result)
        res.status(201).send(result)
    }else{
          console.log(err)  
        }
    })
})






router.delete('/DeleteCar/:id', async(req,res)=>{
    
  conn.query('DELETE FROM cars WHERE id = ?',[req.params.id], async(err,result)=>{
    if(!err){
        res.status(200).json({message : 'car deleted'})
    }else{
        console.log(err)
    }
  })

})


router.get('/getone/:id',async(req,res)=>{
    conn.query('SELECT * FROM cars Where id = ? ',[req.params.id],(err,result)=>{
        if(!err){
            res.send(result)
        }else{
            console.log(err)
        }
    })
})












module.exports = router