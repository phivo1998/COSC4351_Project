const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    
    size:{
        type:Number,
        required:true,
    },
    quantity:{ 
        type:Number, required:true
    }
    
    
    

})

const Tables = mongoose.model('Table', tableSchema);

module.exports = Tables;
