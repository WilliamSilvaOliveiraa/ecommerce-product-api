const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);
const port = process.env.PORT || 3000;

const MongoPassword = process.env.MONGO_PASSWORD;
const MongoUser = process.env.MONGO_USER;

console.log("User", MongoUser);
console.log("Password", MongoPassword);

async function main() {
  await mongoose.connect(
    `mongodb+srv://${MongoUser}:${MongoPassword}@products-learn-api.jighmlj.mongodb.net/?retryWrites=true&w=majority&appName=Products-learn-api`
  );
  console.log("Connected to MongoDB");
  console.log(`Server post is listen in http://localhost:${port}`);
}

main().catch((err) => console.error(err));

module.exports = main;
