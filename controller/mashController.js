const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;

var router = express.Router();

var { mashvera } = require('../models/testm');


router.get('/', (req, res) => {
    console.log("getCalled");
    mashvera.find((err, docs) => {
        if (!err) {
            res.status(200).send({"status": "1", "data": docs });
            // res.send(docs);
            console.log(docs);
        }
        else {
            console.log('Error in retriving mashvera:' + JSON.stringify(err, undefined, 2));
        }
    });
});


router.post('/tblmash', (req, res) => {
    var reqAmeer=  req.body.ameername;
    var reqElan= req.body.elan;
    var reqZuharkibat =  req.body.zuharbat;
    var reqTaleem =  req.body.taleem;
    var reqFzailegash =  req.body.fzailegash;
    var reqDarmiyanibat =  req.body.darmiyanibat;
    var reqMagribbat =  req.body.magribbat;
    var reqMulakat =  req.body.mulakat;

     if(reqAmeer==""||reqElan==""||reqZuharkibat==""||reqTaleem==""||reqFzailegash==""||reqDarmiyanibat==""||reqMagribbat==""||reqMulakat==""){
         res.status(400).send("please fill the all details");
     }
     else{
         var mash = new mashvera({
           ameername: reqAmeer,
           elan: reqElan,
           zuharbat: reqZuharkibat,
           taleem: reqTaleem,
           fzailegash: reqFzailegash,
           darmiyanibat: reqDarmiyanibat,
           magribbat: reqMagribbat,
           mulakat: reqMulakat,
         });
         mash.save((err, doc) => {
             if (!err) { res.send(doc); }
             else {
                 console.log('Error in mashvera save:' + JSON.stringify(err, undefined, 2));
             }
     
         });
     }
     
     
 });

 router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        mashvera.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in retriving mashvera:' + JSON.stringify(err, undefined, 2));

        }
    });


});
 module.exports = router;