const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// Define Middleware Here -------------------------------------
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve Up Static Assets (usually on Heroku) -----------------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Define API Routes Here -------------------------------------

// Send every other request to the React App
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
});

app.listen(PORT, () => {
  console.log(`API Server now on port: ${PORT}`)
});