// This is your typical Express app.
// We have already worked with something like this
var express = require('express')
  , path    = require('path');

var app = express();

app.configure( function () {
  'use strict';
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(express.static(__dirname, 'public')));
});

app.listen(3000);
