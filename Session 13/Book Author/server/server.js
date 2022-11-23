const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const Book = require('./model/books');
const Author = require('./model/authors');
require('dotenv').config();

//So we can pass json information
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDB');
    }
});

app.get('/', (req, res) => {
    res.send('ENDPOINTS');
});

app.use(express.static('public'));
app.use('/api/v1/books', require('./routes/books'));
app.use('/api/v1/authors', require('./routes/authors'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

