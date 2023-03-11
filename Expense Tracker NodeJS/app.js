const path = require('path');

const bodyParser = require('body-parser')

const express = require('express');
const app = express();

const userRoutes = require('./routes/user')

// making public static
app.use(express.static(path.join(__dirname,'public')));
// adding body parser
app.use(bodyParser.json());

app.use(userRoutes);

app.listen(3000);

