const express = require('express')
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();




// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";



// Wait for database to connect, logging an error if there is a problem 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
// Import routes
const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());
 

// route Middlewares
app.use("/api/products", productRoutes);

app.listen(5000,()=>{
    console.log(`Server is running`);
})