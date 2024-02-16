const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connecting to the MongoDB database
mongoose.connect('mongodb://localhost/jcdb').then(() => {
    console.log('Connexion OK a MongoDB');
}).catch((err) => {
    console.log('Connexion Failed a MongoDB', err); 
});

app.get('/', (req, res) => {
  res.send('COUCOU visiteur VOIS TU CE MESSAGE?');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;