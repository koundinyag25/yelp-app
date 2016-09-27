var express = require('express');
var path = require('path');
var app = express();
var routes = require('./server/routes');
var bodyParser = require('body-parser')



app.use(express.static(path.join(__dirname ,'public')));
app.use("/node_modules", express.static('node_modules'));
app.use('/',routes);
app.use(bodyParser.json());


app.listen(process.env.PORT || '3000',function(){
    console.log('listening on port 3000');
});
