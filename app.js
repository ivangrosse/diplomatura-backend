const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/api')

const app = express();
mongoose.connect('mongodb+srv://diplomatura:software@cluster0.xvb0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(express.json());

// initialize routes
app.use('/api', apiRoutes);

// error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({ error: err.message });
 });

app.listen( 4000, function(){
    console.log(`Listening for requests...`);
 });