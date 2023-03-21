import mongoose from "mongoose";
import crypto from "crypto"

const userSchema = new mongoose.Schema({

    name : {
        type : String
    },

    email : {
        type : String
    },
    hashed_password : {
        type : String
    }
})

const User = mongoose.model("User",userSchema)

export default User