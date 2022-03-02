const mongoose=require('mongoose');

var mashvera=mongoose.model('mashvera',{
    ameername:{ type : String},
    elan:{ type : String},
    zuharbat:{ type: String},
    taleem:{ type: String},
    fzailegash:{ type:String},
    darmiyanibat:{ type: String},
    magribbat:{ type: String},
    mulakat:{ type: String}
},'mash');



module.exports= {mashvera };