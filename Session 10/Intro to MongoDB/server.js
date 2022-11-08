const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const { db } = require('./models/user');
require('dotenv').config();

//user model coming from user.js
const User = require('./models/user');

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

app.get('/users', (req, res) => {
    //returns an async response; returns a promise
    // then is waiting for response
    // user helps us access the data on mongodb
    const users = User.find().then((users) => {
        return res.status(200).json({
            message: 'Users retrieved successfully',
            data
        });
    });
});

app.post('/users', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    });
    const user = new User(newUser);
    user.save().then((data) => {
        return res.status(201).json(
            {
                message: 'User created successfully',
                data: data
            }
        );
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

