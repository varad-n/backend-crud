import { mongoDBURL } from './config.js';
import express, { response } from "express";
import mongoose from "mongoose";
const app = express()
import Product from './models/product.model.js';

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

app.get('/api/products', async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});


app.get('/api/products/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});


app.put('/api/products/:id', async (req, res) =>{
    try{
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: "Product not Found!"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    }catch(error){
        res.status(500).json({message: error.message})
    }
})


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