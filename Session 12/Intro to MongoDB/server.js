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

app.post('/users', async (req, res) => {
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

    try {
        let response = await user.save();
        return res.status(201).json(
            {
                message: 'User created successfully',
                data: response
            }
        );
    } catch (err) {
        return res.status(500).json(
            {
                message: 'Server error',
                error: err
            }
        );
    }
});

//FIND USER BY ID
app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let user = await User.findById(id);
        if (user) {
            return res.status(200).json(
                {
                    message: 'User retrieved successfully',
                    data: user
                }
            );
        } else {
            return res.status(404).json(
                {
                    message: 'User not found',
                    data: user
                }
            );
        }
    } catch (err) {
        return res.status(500).json(
            {
                message: 'Server error',
                error: err
            }
        );
    }
});

//FIND USER BY EMAIL
app.get("users/field/:email", async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.findOne({ email: email });
        console.log(user);

        if (user) {
            return res.status(200).json(
                {
                    message: 'User retrieved successfully',
                    data: user
                }
            );
        } else {
            return res.status(404).json(
                {
                    message: 'User not found',
                    data: user
                }
            );
        }
    } catch (err) {
        return res.status(500).json(
            {
                message: 'Server error',
                error: err
            }
        );
    }
});

app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    let user = await User.findByIdAndUpdate(id, req.body, { returnOriginal: false }).then((user) => {
        return res.status(200).json(
            {
                message: 'User updated',
                data: user
            }
        );
    }).catch((err) => {
        return res.status(500).json(
            {
                message: 'Server error',
                error: err
            }
        );
    });
});

app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    let user = await User.findByIdAndDelete(id).then((user) => {
        return res.status(200).json(
            {
                message: 'User deleted',
                data: user
            }
        );
    }).catch((err) => {
        return res.status(500).json(
            {
                message: 'Server error',
                error: err
            }
        );
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

