import express from 'express';
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connecting to the MongoDB database
mongoose.connect('mongodb://localhost/jcdb').then(() => {
    console.log('Connexion OK a MongoDB');
}).catch((err:any) => {
    console.log('Connexion Failed a MongoDB', err); // Logging an error message if the connection fails
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

export default app;
