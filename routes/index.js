var express = require('express');
var router = express.Router();

/* GET home page. */


module.exports = (poll)=>{


  router.get('/', function(req, res, next) {
    pool.query('SELECT * from bread', (err, data) => {
      if (err) return res.send(err)
      res.json(data.rows)
    })
  });

  router.post('/', function(req, res, next) {   
    pool.query('insert into bread (string,integer,float,date,boolean ), values [$1, $2, $3, $4, $5]',[req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), req.body.date, JSON.parse(req.body.boolean)], (err, data) => {
      if (err) return res.send(err)
      res.json(data.text)
    })
  });

  router.put('/:id', function(req, res, next) {   
    pool.query('update  bread  set string = $1 , integer = $2 ,float = $3 , date = $4 , boolean = $5  where id = $6',[req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), req.body.date, JSON.parse(req.body.boolean)], (err, data) => {
      if (err) return res.send(err)
      res.json(data.text)
    })
  });
  router.delete('/:id', function(req, res, next) {   
    pool.query('delete from bread  where id = $1 ',[req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), req.body.date, JSON.parse(req.body.boolean)], (err, data) => {
      if (err) return res.send(err)
      res.json(data.text)
    })
  });

  
   return router;
}
