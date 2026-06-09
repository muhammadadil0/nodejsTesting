const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})
const postModel = mongoose.model("todo", postSchema)

module.exports = {postModel}