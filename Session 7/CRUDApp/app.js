const express = require('express');
const app = express();
const PORT = 5000;

const posts = [
    {
        id: Math.random().toFixed(2),
        title: "Latest Technology",
        author: "Jake",
        timeRequired: "2 Minutes",
        description: "blahblabhblah"
    },
    {
        id: Math.random().toFixed(2),
        title: "Life in Vancouver",
        author: "John",
        timeRequired: "5 Minutes",
        description: "blahblabhblah"
    }
]

app.get('/', (req, res) => {
    //rediracting to new routes
    res.redirect("/api/v1/");
});


app.get('/api/v1/', (req, res) => {
    res.send('ENDPOINTS');
});


app.get('/api/v1/posts', (req, res) => {
    res.status(200).json({
        message: 'success',
        data: articles
    });
});

app.get('/api/v1/posts/:id', (req, res) => {
    const id = req.params.id;

    // for(let i = 0; i < articles.length; i++) {
    //     if(posts[i].id == id) {
    //         return res.status(200).json({
    //             message: "success",
    //             data: articles[i]
    //         });
    //     }
    // }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});