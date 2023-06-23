const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route with custom headers
app.get('/api/data', (req, res) => {
  // Set custom headers
  res.set('Content-Type', 'application/json');
  res.set('X-Custom-Header', 'Custom Value');

  // Send response
  res.json({ message: 'Data retrieved successfully' });
});

const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the express application
const app = express();

// Set up body-parser middleware to parse JSON
app.use(bodyParser.json());

// Define a sample array of cars (replace with your own data)
let Assesories = [
  { id: 1, brand: 'Glossy Gray 19' Aluminium wheel AR-19'', model: 'Camry', year: 2020 },
  { id: 2, brand: 'Twin Exhaust pipe from brandix Z54', model: 'Civic', year: 2019 },
  { id: 3, brand: 'Motor Oil level 5', model: 'Mustang', year: 2021 },
];

// Retrieve all cars Assesories
app.get('/api/cars Assesories', (req, res) => {
  res.json(Assesories)
});

// Retrieve a specific car Assesories
app.get('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const Assesories = cars.find((Assesories) => car.id === id);
  if (!Assesories) {
    res.status(404).json({ message: 'Assesories not found' });
  } else {
    res.json(Assesories);
  }
});


// Delete a Assesories
app.delete('/api/Assesories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cars.findIndex((Assesories) => Assesories.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Assesories not found' });
  } else {
    const deletedCar = cars.splice(index, 1)[0];
    res.json(deletedAssesories);
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');

// Create an instance of the express application
const app = express();

// Define your routes and middleware here...

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Additional code snippet (footer)
// Perform any necessary cleanup or other actions here
console.log('Backend code execution completed.');