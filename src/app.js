const express = require('express');
const routes = require("./routes/");
const app = express();

app.use(routes);

const server = app.listen(3000, function(){
	console.log("The app is running successfully on port", server.address().port);
});

module.exports = app;