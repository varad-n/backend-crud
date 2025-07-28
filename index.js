import { mongoDBURL } from './config.js';
import express, { response } from "express";
import mongoose from "mongoose";
const app = express()



app.get('/', (req, res) => {
    res.send("Hello from Node API");
});


mongoose.connect(mongoDBURL)
.then(() => {
    console.log("Connected to the Database!");
    app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
})
.catch(() => {
    console.log("Connection Failed!");
})