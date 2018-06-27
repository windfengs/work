var express = require('express');
var app = express();
 
 
app.use(express.static('public'));
 
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "denglu.html" );
})

 
app.post('/tack.html', function (req, res) {
    res.sendFile( __dirname + "/" + "tack.html" );
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("访问地址为 http://%s:%s", host, port)
 
})