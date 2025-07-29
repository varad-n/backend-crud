import { mongoDBURL } from './config.js';
import express, { response } from "express";
import mongoose from "mongoose";
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.send(req.body);
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