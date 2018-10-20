const express = require('express');
const router = express.Router();

let inMemoryUser = [
	{id: 1, username: 'user1', password: 'pass1', role: 'user'},
	{id: 2, username: 'user2', password: 'pass2', role: 'user'},
	{id: 3, username: 'user3', password: 'pass3', role: 'user'}
];

//Gettin all users on the server
router.get('/', (req, res)=> {
	res.status(200).json(inMemoryUser);
});


module.exports = router;