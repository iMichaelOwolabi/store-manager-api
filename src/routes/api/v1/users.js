const express = require('express');
const router = express.Router();

let inMemoryUser = [
	{id: 1, username: 'user1', password: 'pass1', role: 'user'},
	{id: 2, username: 'user2', password: 'pass2', role: 'user'},
	{id: 3, username: 'user3', password: 'pass3', role: 'user'}
];

//Getting all users on the server
router.get('/', (req, res)=> {
	res.status(200).json(inMemoryUser);
});

//Getting a specific user with the id property
router.get('/:id', (req, res)=> {
	const { id } = req.params;
	const user = inMemoryUser.filter((theUser)=> theUser.id === parseInt(id));

	if(!user){
		res.status(404).send('The specified user does not exit on this platform');
	}

	else{
		res.status(200).json(user);
	}
});

module.exports = router;