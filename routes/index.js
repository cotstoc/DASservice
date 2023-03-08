var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/servicios', function(req,res){
  res.render("servicios.ejs")
})

router.get("/nosotros", function(req,res,){
  res.render("nosotros.ejs")
})

module.exports = router;
