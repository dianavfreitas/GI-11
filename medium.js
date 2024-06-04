// Load the fs module to perform filesystem operations
const fs = require('fs');

// Define the path to the planets.txt file
const filePath = 'planets.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // If an error occurs, print the error and return
    console.error('Error reading the file:', err);
    return;
  }

  // Print the content of the file to the console
  console.log(data);
});
