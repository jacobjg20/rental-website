const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.get('/', (req, res) => res.send('API Running'));

const PORT = 5000;

app.listen(PORT, () => console.log('Server Started on Port ' + PORT));
