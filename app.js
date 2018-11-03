const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let id = 2;

// TODO: Use more advanced data type
const animals = {0: 'cat', 1: 'dog'}

// INDEX Animals
app.get('/animals', (req, res) => {
    res.status(200).send(animals);
});

// SHOW Animal
app.get('/animals/:id', (req, res) => {
    const animalId = req.params.id;

    res.status(200).send({ [animalId]: animals[req.params.id] });
});

// CREATE Animal
app.post('/animals', (req, res) => {
    const animalId = id++;
    animals[animalId] = req.body.name;

    res.status(200).send({ [animalId]: animals[animalId] });
});

// UPDATE Animal
app.put('/animals/:id', (req, res) => {
    const animalId = req.params.id;
    animals[animalId] = req.body.name;

    res.status(200).send({ [animalId]: animals[animalId] });
});

// DESTROY Animal D:
app.delete('/animals/:id', (req, res) => {
    const animalId = req.params.id;
    const animal = animals[animalId];

    delete animals[animalId];

    res.status(200).send({ [animalId]: animal });
});

// LISTENER
if (require.main === module) {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`App listening on port ${port}!`);
    });
}

module.exports = app;
