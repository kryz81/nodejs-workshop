const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
  createReadStream(__filename).pipe(res);
});

app.listen(3000, () => console.log('Listening'));
