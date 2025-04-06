const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const { getData } = require('./src/controllers/student');

app.use(express.json());

app.get('/students', getData);

// eslint-disable-next-line no-console
app.listen(PORT, () => {
    console.log(`Ejecutando en el puerto ${PORT}`);
});
