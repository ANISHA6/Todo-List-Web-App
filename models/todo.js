//Require mongoose to create schema
const mongoose=require('mongoose');



//create schema
const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

//name of the collection which will be using schema
//here, model, signify the collection
const Todo=mongoose.model('Todo', todoSchema);

module.exports=Todo;