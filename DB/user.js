const mongoose = require('mongoose');



//tasvee schema
const tasvee_schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    service:{
        type:Array,
        required:true
    },
    check:{
        type:String,
        required:true
    },
    instaId:{
        type:String
    }
})

const tasvee_model = mongoose.model("user_detail",tasvee_schema)






module.exports={
   
    tasvee_model:tasvee_model

}

