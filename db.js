const Mongoose = require("mongoose");

const localDB = `mongodb+srv://meal:meal123@cluster0.amujs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;