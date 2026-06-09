const mongoose = require('mongoose')

async function connectDB(){

    await mongoose.connect(process.env.MONGOSE_URI)

    console.log('Database connected successfully')
}

module.exports = connectDB;