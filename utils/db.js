const mongoose = require("mongoose");

//Mongodb Connection
module.exports = connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://mihirbhadak:123123123@evently0.emx4a35.mongodb.net/?retryWrites=true&w=majority&appName=Evently0'
    );
    console.log(`Connection Success`);
  } catch (e) {
    console.log(`Connection Error: ${e}`);
  }
};
