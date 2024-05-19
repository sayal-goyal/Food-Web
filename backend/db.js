const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://sayalgoyal:foodweb@cluster0.2ufumne.mongodb.net/foodweb?retryWrites=true&w=majority"

const mongoDB=async()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected");
        // const fetched_data = await mongoose.connection.db.collection("food_items");
        // const data = await fetched_data.find({}).toArray()
    } catch (err) {
        console.error(err);
    }
}

module.exports = mongoDB;