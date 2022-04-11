const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 8000;

const apiRoutes = require('./routes/api');
const { idValidator, priceValidator, propertyValidator, nameValidator } = require('./middlewares/requestValidator');

const app = express();
mongoose.connect('mongodb+srv://diplomatura:software@cluster0.xvb0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use('/api', priceValidator);
app.use('/api', propertyValidator);
app.use('/api', nameValidator);
app.use('/api/products/:id', idValidator);

// error handling middleware
app.use(function(err, req, res, next){
    res.status(500).send({ error: err.message });
 });

app.use('/api', apiRoutes);

app.listen( port , function(){
    console.log(`API escuchando en el puerto ${port}...`);
 });