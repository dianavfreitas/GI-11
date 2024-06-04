const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get all employees
app.get('/employees', (req, res) => {
  fs.readFile('./employees.json', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading employees file.');
    }
    try {
      const employees = JSON.parse(data);
      res.send(employees);
    } catch (error) {
      console.error(error);
      res.status(400).send('Invalid JSON format in employees file.');
    }
  });
});

// Endpoint to get a single employee by ID
app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);

  fs.readFile('./employees.json', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading employees file.');
    }
    try {
      const employees = JSON.parse(data);
      const employee = employees.find(emp => emp.employeeID === employeeID);

      if (!employee) {
        return res.status(404).send('Employee not found.');
      }

      res.send(employee);
    } catch (error) {
      console.error(error);
      res.status(400).send('Invalid JSON format in employees file.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
