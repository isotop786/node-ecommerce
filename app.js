const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()

// import routes
const userRoutes = require('./routes/user.route')

// db
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DATABASE);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

// routes middleware
app.use("/api/users",userRoutes)


connectDB().then(()=>{
    app.listen(process.env.PORT ,()=>{
        console.log("Node.js backend running on: http://localhost:"+process.env.PORT)
    })
})


