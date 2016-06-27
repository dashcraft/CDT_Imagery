var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/aboutme', function(req,res){
	res.render('main.jade');
})

router.get('/portfolio/boudoir', function(req,res){
	res.render('boudoir');

})

router.get('/portfolio/landscape', function(req,res){
	res.render('landscape');
})

module.exports = router;
