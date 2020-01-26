const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const productRoute = require('./Routes/product');
const orderRoute = require('./Routes/order');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/product', productRoute) // product 불러오기, productRoute 보여지기
app.use('/order', orderRoute)



const port = 5000;

app.listen(port, () => console.log(`server started at ${port}`));