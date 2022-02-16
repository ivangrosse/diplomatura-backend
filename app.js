const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/api')


const app = express();
mongoose.connect('mongodb://localhost/products');
mongoose.Promise = global.Promise;

app.use(express.static('public')); //middleware que permite agregar contenido estatico
app.use(express.json());

// initialize routes
app.use('/api', apiRoutes);

// error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
 });

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
 });