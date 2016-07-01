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


router.get('/California', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/Photography_Site_Photos/Landscape/California');
	res.render('california', {data:files});

})

router.get('/New-York', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/Photography_Site_Photos/Landscape/New_York');
	res.render('new-york', {data:files});

})

router.get('/Oregon', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/Photography_Site_Photos/Landscape/Oregon');
	res.render('oregon', {data:files});

})


router.get('/Oklahoma', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/Photography_Site_Photos/Landscape/Oklahoma');
	res.render('oklahoma', {data:files});

})

router.get('/portraits', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/Photography_Site_Photos/Portraits');
	res.render('portraits', {data:files});

})

router.get('/aboutme', function(req,res){
	res.render('main.jade');
})

router.get('/boudoir', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/Photography_Site_Photos/Boudoir');
	res.render('boudoir', {data:files});

})

router.get('/lifestyle', function(req,res){
	var files = [];
	files.length=0;
	files =fs.readdirSync('./public/images/Photography_Site_Photos/Lifestyle');
	res.render('lifestyle', {data:files});

})



module.exports = router;
