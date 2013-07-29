# Module 3
> we continue with views in Express

> HTML elements and Jade View Engine

> Web development with Express is awesome!

##some things of interest
-  Views in Express

-  Jade View Engine

-  HTML Elements

-  Embedding JavaScript in Views

-  Using Blocks for layout

##Views in Express
-  User interface

-  Based on Templates

-  Support for multiple View Engines
  -  Jade
  -  EJS
  -  JSHtml
  -  ...
- Default is Jade
  -  http://jade-lang.com
  -  visionmedia at github.com
  
### Some Code


      		var express = require('express')
        		, path    = require('path');
    
      		var app = express();
  
      		app.configure( function () {
        		app.set('view engine', 'jade');
        		app.set('views', __dirname + '/views');
        		app.use(express.static(path.join(__dirname, 'public')));
      		});
    
      		app.get('/', function (req, res) {
        		res.render('empty');
      		});
   
      		// generic so any View will work 
      		app.get('/:anyname', function (req, res) {
        		res.render(req.params.anyname);
      		});
    
      		app.listen(3000);
