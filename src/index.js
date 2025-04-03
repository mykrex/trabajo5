const express = require('express');
const studentController = require('./controllers/studentController');

const app = express();

app.use(express.json());

app.get('/students', studentController.getData);

// Server HTTP
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});