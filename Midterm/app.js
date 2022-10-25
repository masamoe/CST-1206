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
    const department = req.params.department;
    const depEmployees = employeeList.filter(employee => employee.department === department);
    return res.status(200).json(depEmployees);
});

app.get('/employees/:employeeID', (req, res) => {
    const employeeID = req.params.employeeID;
    const idEmployees = employeeList.filter(employee => employee.employeeID == employeeID);
    return res.status(200).json(idEmployees);
});

app.post('/employees', (req, res) => {
    const employeeData = req.body;
    employeeList.push(employeeData);
    return res.status(200).json(employeeList);
});

app.put('/employees/:employeeID', (req, res) => {
    const employeeID = req.params.employeeID;
    const employeeData = req.body;
    const index = employeeList.findIndex(employee => employee.employeeID == employeeID);
    employeeList[index] = employeeData;
    return res.status(200).json(employeeList);
});

app.delete('/employees/:employeeID', (req, res) => {
    const id = req.params.id;
    const index = employeeList.findIndex(val => val.id == id);
    employeeList.splice(index, 1);
});

app.get('/employees/salary/highest', (req, res) => {
    const highestSalary = employeeList.reduce((prev, current) => (prev.Salary > current.Salary) ? prev : current);
    return res.status(200).json(highestSalary);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});