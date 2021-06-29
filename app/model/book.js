
const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    books_name:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Double,
        required:true
    },
    author:{
        type: String,
        required: true
    },
    rating:{
        type: Double,
        required:true
    },
    shipping_freight:{
        type: double,
        required: true
    }
})

module.exports = mongoose.model('Book',bookSchema)