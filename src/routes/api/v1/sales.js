const express = require('express');
const router = express.Router();

let inMemorySalesRecord = [
	{id: 1, productName: 'Headset1', quantity: 2, amount: 400, attendant: 'User1'},
	{id: 2, productName: 'Samsung S10', quantity: 3, amount: 2700, attendant: 'User3'},
	{id: 3, productName: 'Sneakers', quantity: 4, amount: 180, attendant: 'User2'},
];

//List all sales record
router.get('/', (req, res)=> {
	res.status(200).json(inMemorySalesRecord);
});