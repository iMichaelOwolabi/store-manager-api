const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);


/*const server = app.listen(3000, ()=> {
	console.log('The app is running successfully on port', server.address().port);
});*/


let port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === 'number') ? port : 3000;

if(!module.parent){ app.listen(port); }

console.log('The app is running successfully on port:' + port);

module.exports = app;