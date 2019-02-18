var express = require('express');
var router = express.Router();
var data = require('../customData/data.json');

/*lets get the data*/
router.get('/get', function(req, res, next) {
  res.send(data);
});

/*lets update the data*/
router.post('/post', function(req, res, next) {

  var newObj = {};
  
  newObj.name = req.body.name;
  newObj.email = req.body.email;
  newObj.comment = req.body.comment;
  newObj.category = req.body.category;
  newObj.date = new Date().toDateString();

  data.push(newObj);

  var json = JSON.stringify(data);

  var fs = require('fs');

  fs.writeFile('./customData/data.json', json, 'utf8', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("File saved successfully!");
  });


  var obj = req.body.title;


  res.send("derp");

  
});


module.exports = router;
