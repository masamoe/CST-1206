const express = require('express');
const app = express();
const PORT = 5000;

let employeeList = [
    {
    id: 1,
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    Salary: 100000
    },
    {
    id: 2,
    name: "Daniel",
    email: "daniel@company.ca",
    employeeID: 101,
    department: "HR",
    Salary: 50000
    }
];

app.get('/', (req, res) => {
    res.send('Welcome!')
});

app.get('/employees', (req, res) => {
    return res.status(200).json(employeeList);
});

app.get('/employees/:department', (req, res) => {
    const department = req.body;
    let depEmployees = employeeList.filter(val => val.department == department);
    return res.status(200).json(depEmployees);
});

app.get('/employees/:employeeID', (req, res) => {
    const employeeID = req.body;
    let IDemployees = employeeList.filter(val => val.employeeID == employeeID);
    return res.status(200).json(IDemployees);
});

app.post('/employees', (req, res) => {
    const employeeData = req.body;
    employeeList.push(employeeData);

    return res.status(201).json(employeeList);
});

app.put('/employees/:employeeID', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});