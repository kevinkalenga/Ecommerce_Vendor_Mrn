const mongoose = require('mongoose')

module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true})
        console.log("db connected")
    } catch (error) {
        console.log(error.message)
    }
}

