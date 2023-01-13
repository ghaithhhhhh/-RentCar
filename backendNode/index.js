
const bodyParser = require("body-parser");
const express = require("express");
const AuthRoute = require('./routes/auth')
const CarsRoute = require('./routes/cars')
const reservationRoute = require('./routes/reservation')
const app = express();
const errorController = require('./controller/error')


//var db = require('./util/database');
//var connection = db.connection()



const Ports = process.env.Ports || 5000
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET , POST , PUT , DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization')
    next()
})


app.use( '/auth' , AuthRoute )
app.use('/auth',CarsRoute)
app.use( '/auth' , reservationRoute )

app.use('/getImage',express.static('./upload'))
app.use( errorController.get404)
app.use( errorController.get500)




app.listen(Ports , ()=> {
    console.log('listenning')
})