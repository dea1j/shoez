import express from 'express';
import products from './data/Products.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.json(products)
    console.log(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.get('/', (req, res) => {
    res.send('Hello world')
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})