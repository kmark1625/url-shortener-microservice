var express = require('express');
var app = express();
var UrlShortenerService = require('./url-shortener-service');
var urlShortenerService = new UrlShortenerService();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
})

app.get(/\/new\/(.+)/, function(req, res) {
  var url = req.params[0];
  var result = urlShortenerService.shorten(url);
  res.send(result);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
