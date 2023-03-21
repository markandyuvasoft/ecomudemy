import express from "express"
import mongoose from "mongoose"
import router from "./routes/user.js"


import dotenv from "dotenv"
dotenv.config()


mongoose.connect(process.env.DATABASE, {
}).then(()=> console.log('DB connected'))


const app = express()

app.use('/api',router)

const port = process.env.port || 5000

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})
