const { createReadStream } = require('fs');

const stream = createReadStream('invalid-file');

stream.on('error', (err) => {
  // ...
});
