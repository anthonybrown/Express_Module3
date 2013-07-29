// This is your typical Express app.
// We have already worked with something like this
var express = require('express')
  , path    = require('path');

var app = express();

app.configure( function () {
  'use strict';
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res) {
  'use strict';
  res.render('empty');
});


app.get('/:anyname', function (req, res) {
  'use strict';
  res.render(req.params.anyname);
});

app.listen(3000);
