var express = require('express');
var router = express.Router();

/* GET home page. */


module.exports = function(pool){
  router.get('/', function(req, res, next) {
    pool.query('SELECT * from siswa', (err, data) => {
      if (err) return res.send(err)
      res.json(data.rows)
    })
  });

  router.post('/', function(req, res, next) {   
    pool.query('insert into siswa (nama,umur,isboolean ), values [$1, $2, $3]',[req.body.nama, parseInt(req.body.umur), JSON.parse(req.body.isboolean)], (err, data) => {
      if (err) return res.send(err)
      res.json(data)
    })
  });

  router.put('/:id', function(req, res, next) {   
    pool.query('update  siswa  set nama = $1 , umur = $2 ,isboolean = $3   where id = $4',[req.body.nama, parseInt(req.body.umur), JSON.parse(req.body.isboolean), req.params.id], (err, data) => {
      if (err) return res.send(err)
      res.json(data)
    })
  });
  router.delete('/:id', function(req, res, next) {   
    pool.query('delete from siswa  where id = $1 ',[req.params.id], (err, data) => {
      if (err) return res.send(err)
      res.json(data)
    })
  });

  
   return router;
}
