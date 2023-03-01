const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouts = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouts);
app.use(shopRoutes);

app.use(errorController.getEror404);

app.listen(3000);
