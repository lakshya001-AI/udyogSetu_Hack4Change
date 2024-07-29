const mongoose = require("mongoose");

async function connectMongoose() {
  try {
    await mongoose
      .connect("mongodb+srv://makodelakshya101:ccJQV58cvhqzHDD2@udyogsetudatabase.zzyjca3.mongodb.net/?retryWrites=true&w=majority&appName=udyogSetuDatabase")
      .then((res) => console.log(`MongoDB Database is Connected`))
      .catch((err) => console.log(`Error connecting to Database:` + err));
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectMongoose;
