// app.js
// REQUIREMENTS
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// DATA
const animals = [
    { id: 0, name: 'George', species: 'Lion' },
    { id: 1, name: 'Krista', species: 'Penguin' }
]

let newId = 2;

function findAnimalById(id) {
    return animals.find(animal => { return animal.id == id })
}

// INDEX Animals
app.get('/animals', (req, res) => {
    res.status(200).send(animals);
});

// SHOW Animal
app.get('/animals/:id', (req, res) => {
    const animalId = req.params.id;
    res.status(200).send(findAnimalById(animalId));
});

// CREATE Animal
app.post('/animals', (req, res) => {
    const animal = Object.assign({id: newId++}, req.body);
    animals.push(animal)
    res.status(200).send(animal);
});

// UPDATE Animal
app.put('/animals/:id', (req, res) => {
    const animal = Object.assign(findAnimalById(req.params.id), req.body)
    res.status(200).send(animal);
});

// DESTROY Animal D:
app.delete('/animals/:id', (req, res) => {
    const animal = findAnimalById(req.params.id);
    animals.splice(animals.indexOf(animal), 1);
    res.status(200).send(animal);
});

// LISTENER
if (require.main === module) {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`App listening on port ${port}!`);
    });
}

module.exports = app;
