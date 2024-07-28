const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const MongoPassword = process.env.MONGO_PASSWORD;
const MongoUser = process.env.MONGO_USER;

async function main() {
  await mongoose.connect(
    `mongodb+srv://${MongoUser}:${MongoPassword}@products-learn-api.jighmlj.mongodb.net/?retryWrites=true&w=majority&appName=Products-learn-api`
  );
  console.log("Connected to MongoDB");
}

main().catch((err) => console.error(err));

module.exports = main;
