const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const http = require("http")
// const router = require("./routes/router.js");
// require("./database/database")
require("dotenv").config();
const app = express()
const server = http.createServer(app)

// app.use Statements
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers" ,"Origin ,X-requested-With , Content , Accept , Content-type,Authorization")
    res.setHeader("Access-Control-Allow-Methods","GET , POST,PUT,DELETE,PATCH,OPTIONS");
    next() 
  
  })

  server.listen(9000,()=>{
    console.log(`Server Running On Port ${9000}`)

  })