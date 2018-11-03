const express = require('express');

const app = express();

let id = 0;

const animals = {}

const port = 3000

app.listen(port, () => {
  console.log(`Server Starts on ${port}`);
});
