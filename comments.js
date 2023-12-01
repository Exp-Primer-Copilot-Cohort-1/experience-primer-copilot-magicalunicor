// Create web server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const port = 3000;
const hostname = 'localhost';

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//fire controllers
const comments = require('./controllers/comments');
comments(app);

//listen to port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});