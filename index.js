const express=require('express');

const cors = require('cors');
// add body-parser to read json values from frontend
const bodyParser = require('body-parser');

const mongoose =require('./db.js');


var employeeController=require('./controller/employeeController');
var mashController=require('./controller/mashController');

const port = process.env.PORT || 3000;



var app=express(); 
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.use('/employee',employeeController);
app.use('/mash',mashController);
 
// app.use(bodyParser.json());

app.listen(port, () => {
    console.log('listening on port:' + port);

});
