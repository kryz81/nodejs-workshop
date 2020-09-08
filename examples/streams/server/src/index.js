const express = require('express');
const { createWriteStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
  req.pipe(req.res);
});

app.listen(3000, () => console.log('Listening'));
