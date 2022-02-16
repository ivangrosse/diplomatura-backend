const express = require('express');
const router = express.Router();

const Product = require('../models/product');

router.get('/products', async (req,res) => {
    try {
        const products = await Product.find({});

        return res.send(products);
    } catch(error){
        console.log('Algo ocurrio:', error);
        throw error;
    }
});

router.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);

        return res.send(product);
    } catch(error){
        console.log('Algo ocurrio:', error);
        throw error;
    }
});

router.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

        return res.send(product);
    } catch(error){
        console.log('Algo ocurrio:', error);
        throw error;
    }
});

router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id });

        return res.send(product);
    } catch(error){
        console.log('Algo ocurrio:', error);
        throw error;
    }
});

module.exports = router;