//require("dotenv").config()

import dotenv from "dotenv"
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import app from "./app.js"


dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`app listening on port ${process.env.PORT}`)
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })
    })
})
.catch((err) => {console.log("Mongo db connection failed", err)})







/*

import express from "express"
const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("err: ", error)
            throw error

        app.listen(process.env.PORT, () => {
            console.log("App is listning on port ${process.env.PORT}")
        })
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()

*/