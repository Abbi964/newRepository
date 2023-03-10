const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const sequelize = require('./utill/database');

const mainRoutes = require('./routes/mainRoutes')

// making public static
app.use(express.static(path.join(__dirname,'public')));
// using body parser in json parsing mode
app.use(bodyParser.json())

app.use(mainRoutes);

sequelize.sync();

app.listen(3000);

