// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRoute from  "./routes/user.js";
// import authRoute from  "./routes/auth.js";
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
const app = express();

dotenv.config();
 // "mongodb+srv://amoo:amoo@cluster0.yun1tnx.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(
   process.env.MONGO_URL
).then(()=> console.log ("DBConnection successfull"))
.catch((err)=> {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running");
});