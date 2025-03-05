const express = require("express");//for creating server
const app = express();//creating object to express
const dotenv = require("dotenv");//load env variables from .env file
const path = require("path");//to define it is path
const cors = require("cors");//accessing various domain
const connectDatabase = require("./config/connectDatabase.jsx");//importing DB file
dotenv.config({ path: path.join(__dirname, "config", "config.env") });//configuring env file

const products = require("./routes/product.jsx");//products route
const orders = require("./routes/order.jsx");//order route

connectDatabase();//connecting database

// middleware
app.use(express.json());

app.use(cors());

// routes
app.use("/api/v1/", products);//to mount the router of products
app.use("/api/v1/", orders);//to mount the router of order

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );//starting the server
});
