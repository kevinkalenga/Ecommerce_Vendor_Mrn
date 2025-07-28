const mongoose = require('mongoose')

module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true})
        console.log("de connected")
    } catch (error) {
        console.log(error.message)
    }
}

// const dbConnect = mongoose
//  .connect(process.env.MONGO_URI).then(() => {
//     console.log('MongoDb is connected')
//  }).catch((err) => {
//     console.log(err)
//  })

//  module.exports = dbConnect;