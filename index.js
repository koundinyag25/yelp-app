var express = require('express');
var path = require('path');
var app = express();
var routes = require('./server/routes');
var bodyParser = require('body-parser')



app.use(express.static(path.join(__dirname ,'public')));
app.use('/',routes);
app.use(bodyParser.json());


app.listen('3000',function(){
    console.log('listening on port 3000');
});
