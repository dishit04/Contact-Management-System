const express = require("express")
const app = express()
const connection = require("./config/db.js")
const ContactRouter = require("./routes/Contact.routes.js")
const AuthRouter = require("./routes/auth.routes.js")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/api", AuthRouter)
app.use("/api",ContactRouter)



app.listen(process.env.port,async()=>{
    try {
      await connection
      console.log("Server is connected with DB")
    } catch (error) {
      console.log("Server is not connected with DB")
    }
    console.log(`Server is listening on Port : ${process.env.port} and Url http://localhost:${process.env.port}`)
})