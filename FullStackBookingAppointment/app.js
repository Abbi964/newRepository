const path = require('path')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const mainRoutes = require('./routes/main');

// making public a static
app.use(express.static(path.join(__dirname,'public')));
// using body parser
app.use(bodyParser.json());

app.use(mainRoutes);

sequelize.sync()

app.listen(3000)