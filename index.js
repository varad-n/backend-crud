import { mongoDBURL } from './config.js';
import express from "express";
import mongoose from "mongoose";
const app = express();
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js';

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

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