const express = require('express');
const app = express();
const port = 4000;
const student = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.get('/students', (req, res) => {
    return res.status(200).json(student);
})

app.post('/students', (req, res) => {
    const studentData = req.body;
    student.push(studentData);

    return res.status(201).json(student);
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})