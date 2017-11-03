var express = require('express');
const fs = require('fs');
const http = require('http');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html',{root: 'public'});
})



router.get('/imageout',function(req,res,next){
     var k = "http://api.wolframalpha.com/v1/simple?appid=KGYWVU-VGRJV3G3U4&i=";
    k += req.query.q;
    console.log("request received");
    request(k).pipe(res);
});

var word = "https://owlbot.info/api/v1/dictionary/";
router.get('/word', function(req,res) {
  word += req.query.q;
  request(word).pipe(res);
});

module.exports = router;
