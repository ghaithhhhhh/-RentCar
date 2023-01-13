const sql = require('mysql2')
//const config = require('../config/config.json')

//const pool = sql.createPool(
//{
//connectionLimit:10,
//host : config.host,
//root :config.root,
//database : config.database,
//password : config.password,
//port : 3306
//}

//)

var mysql = require('mysql'); 
var conn = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '',
    database: 'nodeauth',
     
}); 
//conn.connect(function(err) { 
  //if (err){console.log(err)};
  //console.log('Database is connected successfully !'); 
//}); 
module.exports = conn;
