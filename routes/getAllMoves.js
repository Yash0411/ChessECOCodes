var express = require('express');
var router = express.Router();

const data = require("../Data/converted.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
});


/* GET Move as Per CODE */
router.get('/:CODE', function(req, res, next) {
  res.statusCode = 200;
  res.set('Content-Type', 'text/html')
  res.send(`<div style="font-size:'large'"><div><b><i>${data[req.params.CODE].name}</i></b></div><br/>  <div>${data[req.params.CODE].moves}</div></div>`)
});


/* GET the next move as per Player */
router.get('/:CODE/*', function(req, res, next) {
  const moves = req.originalUrl.split('/').splice(2,);
  
  moves_list = data[req.params.CODE].moves
  
  var l1 = moves.length;
  var l2 = moves_list.length;
  var i = 0;
  var j = 0;

  while(i<l1 && j<l2){
      if(moves[i]==moves_list[j]){
        i++;
      }
      j++
  }
  if(j===l2){
    resp = `<div>Invalid Combination of moves</div>`
  }
  else if(i!=l1){
    resp = `<div>Invalid Combination of moves</div>`
  }
  else{
    if(moves_list[j].length == 1){
      j++;
    }
    resp = `<div>${moves_list[j]}</div>`
  }
  res.statusCode = 200;
  res.set('Content-Type', 'text/html')
  res.send(resp)
});


module.exports = router;
