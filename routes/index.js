var express = require('express');
var router = express.Router();
var exp = require('serve-index');
/* GET home page. */
var fs = require('fs');


router.get('/', function(req, res, next) {

	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/SliderPhotos');
	res.render('index',{data:files});
});

router.get('/images', function(req,res){
	
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/SliderPhotos');

	res.send(files);
})


router.get('/aboutme', function(req,res){
	res.render('main.jade');
})

router.get('/boudoir', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/imsages/Photography_Site_Photos/Boudoir');
	res.render('boudoir', {data:files});

})

router.get('/lifestyle', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/Photography_Site_Photos/Lifestyle');
	res.render('lifestyle', {data:files});

})


router.get('/portfolio/landscape', function(req,res){
	res.render('landscape');
})

module.exports = router;
