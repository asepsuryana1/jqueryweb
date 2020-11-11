var express = require('express');
var router = express.Router();

/* GET home page. */


module.exports = (poll)=>{


  router.get('/', function(req, res, next) {
    res.render('index';
  });
  pool.query('SELECT * from bread', (err, res) => {
    console.log(err, res.rows)
    pool.end()
  })
  
   router;
}
