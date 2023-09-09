const express = require('express')
const app = express();
const dotenv = require('dotenv').config()

app.get('/',(req,res)=>{
    res.send("it's working!")
})


app.listen(process.env.PORT,()=>{
    console.log("Node.js backend running on: http://localhost:"+process.env.PORT)
})
