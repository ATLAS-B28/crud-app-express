const mongoose = require('mongoose')
const connectDb = async (req,res)=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            console.log(`MongoDb connected = ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
    }
}
module.exports = connectDb