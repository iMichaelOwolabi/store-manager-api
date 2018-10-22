const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

let port = process.env.PORT || (process.argv[2] || 3000);

if(!module.parent){ app.listen(port); }

console.log('The app is running successfully on port:' + port);

module.exports = app;