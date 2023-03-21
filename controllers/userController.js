import express from "express"

const userController = express.Router()

const create = async(req,res)=>{
    res.send("hellos")
}

export default {
    userController,
    create
}