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

//Getting a apecific sales record
router.get('/:id', (req, res)=> {
    const {id} = req.params;
    const sales = inMemorySalesRecord.filter((theSales)=> theSales.id === parseInt(id));

    if(!sales){
        res.status(404).send(`Product with id ${id} does not exist on this platform`);
        return;
    }
    
    res.status(200).json(sales);
});

 //Creating a new sales record
 router.post('/', (req, res)=> {
    const {productName, price, quantity} = req.body;
    const lastId = inMemorySalesRecord.length;
    const id = lastId + 1;

    let username = 'user2';

    let newSales = {
        'id': id,
        'productName': productName,
        'quantity': quantity,
        'price': price,
    };
    const amount = newSales.price * newSales.quantity;

    let newSalesRecord = {
        'id': newSales.id,
        'productName': newSales.productName,
        'quantity': newSales.quantity,
        'amount': amount,
        'attendant': username
    };

    inMemorySalesRecord.push(newSalesRecord);
    res.status(201).location(`./api/sales/${id}`).json(newSalesRecord);
});

module.exports = router;