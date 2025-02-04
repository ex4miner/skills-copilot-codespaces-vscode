// Create web server
// Define a route that listens on port 3000
// The route should accept a GET request to /comments
// Read the comments.json file and respond with the contents of the file
// Use the fs module to read the file
// Use the res object to respond to the client
// Start the server and test the route using your browser

const express = require('express');
const fs = require('fs');
const app = express();

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred. Please try again later.');
            return;
        }
        res.status(200).send(data);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});