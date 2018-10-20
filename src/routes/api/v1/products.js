const express = require('express');
const router = express.Router();

let inMemoryProducts = [
	{id: 1, productName: 'Headset1', price: '200', category: 'Gadget', quantity: 7},
	{id: 2, productName: 'Samsung S10', price: '900', category: 'Gadget', quantity: 17},
	{id: 3, productName: 'APIs & Postman', price: '58', category: 'Book', quantity: 9},
];

//List all products.
router.get('/', (req, res)=> {
	res.status(200).json(inMemoryProducts);
});

module.exports = router;