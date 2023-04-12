const mongoose = require("mongoose")

const connection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL , {useUnifiedTopology: true , useNewUrlParser: true});
        console.log("Database connect successfully");
    } catch (error) {
        console.log(`Error while connecting with database`, error.message);
    }
}
module.exports = connection