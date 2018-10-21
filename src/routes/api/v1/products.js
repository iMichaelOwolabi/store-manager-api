const express = require('express');
const router = express.Router();

let inMemoryProducts = [
	{id: 1, productName: 'Headset1', price: '200', category: 'Gadget', quantity: 7},
	{id: 2, productName: 'Samsung S10', price: '900', category: 'Gadget', quantity: 17},
	{id: 3, productName: 'APIs & Postman', price: '58', category: 'Book', quantity: 9},
];

// List all products.
router.get('/', (req, res) => {
	res.status(200).json(inMemoryProducts);
});

// Getting a apecific product
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const product = inMemoryProducts.filter(theProduct => theProduct.id === parseInt(id))[0];

    if(!product) {
        res.status(404).json(`The specified product does not exist on this platform`);
        return;
    }
    
    res.status(200).json(product);
});

// Creating a new product
router.post('/', (req, res) => {
    const { productName, price, category, quantity } = req.body;
    const lastId = inMemoryProducts.length;
    const id = lastId + 1;

    let newProduct = {
        'id': id,
        'productName': productName,
        'price': price,
        'category': category,
        'quantity': quantity
    };

    inMemoryProducts.push(newProduct);
    res.status(201).location(`./api/products/${id}`).json(newProduct);
});

// Updatinging existing product
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {productName, price, category, quantity} = req.body;
    const product = inMemoryProducts.filter(theProduct => theProduct.id === parseInt(id))[0];
    if(!product){
        res.status(404).send(`The product with the given id cannot be found`);
    }

    const newUpdate = {
        'id': id, 
        'productName': productName,
        'price': price,
        'category': category,
        'quantity': quantity
    }
    if(!newUpdate){
        res.status(400).send(`Bad request, kindly check the supplied values`);
    }
    res.status(200).location(`./api/products/${id}`).json(newUpdate);
});

// Delete a specific product
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const product = inMemoryProducts.filter(theProduct => theProduct.id === parseInt(id))[0];

    if(!product){
        res.status(404).send(`The product with the given id cannot be found`);
        return;
    }
    
    res.status(200).send(`The product has been successfully deleted`);
});

module.exports = router;