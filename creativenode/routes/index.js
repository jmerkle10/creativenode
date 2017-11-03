var express = require('express');
const fs = require('fs');
const http = require('http');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
res.sendFile('weather.html',{root: 'public'});
})



router.get('/word',function(req,res,next){
     var owl = "https://owlbot.info/api/v1/dictionary/";
    owl += req.query.q;
    console.log("in getword");
    request(owl).pipe(res);
});



module.exports = router;
