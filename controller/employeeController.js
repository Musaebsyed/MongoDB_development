const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;

var router = express.Router();

var { users } = require('../models/employee');



//localhost:3000/employee/
router.get('/', (req, res) => {
    users.find((err, docs) => {
        if (!err) {
            res.send(docs);
            console.log(docs);
        }
        else {
            console.log('Error in retriving user:' + JSON.stringify(err, undefined, 2));
        }
    });
});



router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    users.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in retriving user:' + JSON.stringify(err, undefined, 2));

        }
    });
});


router.post('/', (req, res) => {

  var reqName=  req.body.name;
var reqemail=req.body.email;
   var reqaddress =  req.body.address;
   var reqphone =  req.body.phone;
    if(reqName==""||reqemail==""||reqphone==""||reqaddress==""){
        res.status(400).send("please fill the all details");
    }
    else{
        var user = new users({
            name: reqName,
            email: reqemail,
            address: reqaddress,
            phone: reqphone
        });
        user.save((err, doc) => {
            if (!err) { res.send(doc); }
            else {
                console.log('Error in users save:' + JSON.stringify(err, undefined, 2));
            }
    
        });
    }
    
    
});


  


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var user = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
    };

    users.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in users update:' + JSON.stringify(err, undefined, 2));
        }

    });
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    users.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in users Delete:' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;