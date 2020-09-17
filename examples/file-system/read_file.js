const { readFile, createReadStream } = require('fs');
const fs = require('fs/promises');

readFile(`${__dirname}/big.file`, (err, data) => {
  if (err) {
    // ... handle error
    return;
  }

  console.log(`${data.length / 1024 / 1024} MB`);
});

fs.readFile(`${__dirname}/big.file`)
  .then((data) => {
    console.log(`${data.length / 1024 / 1024} MB`);
  })
  .catch((err) => {
    // handle error
  });

const stream = createReadStream(`${__dirname}/big.file`);
let result = '';

stream.on('data', (chunk) => {
  result += chunk;
});

stream
  .on('end', () => {
    console.log(`${result.length / 1024 / 1024} MB`);
  })
  .on('error', (err) => {
    // handle error
  });
