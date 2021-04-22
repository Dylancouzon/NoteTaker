const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var notes = [];

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// Add note function
app.post('/api/notes', (req, res) => {
    notes.push(req.body);
  
    fs.writeFile(path.join(__dirname, 'db/db.json'), JSON.stringify(notes), err => {

    });
  
    res.json(req.body);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });