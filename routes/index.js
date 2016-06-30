var express = require('express');
var router = express.Router();
var exp = require('serve-index');
/* GET home page. */
var fs = require('fs');

var files = [];


router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/images', function(req,res){
	var files =fs.readdirSync('./public/images/SliderPhotos');

	res.send(files);
})


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
