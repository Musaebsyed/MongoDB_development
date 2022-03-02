const mongoose=require('mongoose');

var users=mongoose.model('users',{
    name:{ type : String},
    email:{ type : String},
    address:{ type: String},
    phone:{ type: Number}
},'user');





module.exports= { users };
