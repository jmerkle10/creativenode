var express = require('express');
const fs = require('fs');
const http = require('http');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
res.sendFile('weather.html',{root: 'public'});
})
router.get('/getcity',function(req,res,next) {
    var myRe = new RegExp("^" + req.query.q);
       console.log(myRe);
   fs.readFile(__dirname + '/cities.dat.txt',function(err,data)
    {
if(err) throw err;
var cities = data.toString().split('\n');
console.log(cities);
var jsonresult = [];
	for(var i = 0; i < cities.length;i++){
	var result = cities[i].search(myRe);
	if(result != -1){
	console.log(cities[i]);
	jsonresult.push({city:cities[i]});
	}	
	}	
	res.status(200).json(jsonresult);

});

  });

router.get('/word',function(req,res,next){
     var owl = "https://owlbot.info/api/v1/dictionary/";
    owl += req.query.q;
    console.log("in getword");
    request(owl).pipe(res);
});



module.exports = router;
