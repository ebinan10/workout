const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const WorkOut =  mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    reps:{    
        type: Number,
        required: true
    }, 
    load:{
        type: Number,   
        required: true
    } 
    , 
    userId:{
        type: String,
        ref:'User',
        required: true  
     }
        
    
}, {timestamps:true})
    module.exports = mongoose.model("workout", WorkOut)