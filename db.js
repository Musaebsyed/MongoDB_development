const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',(err) => {
    if(!err) {
        console.log('mongodb Connection Sucessfully established');
    }
    else {
        console.log('mongodb Connection Failed:'+ JSON.stringify(err,undefined, 2));
    }
});
module.exports = mongoose;