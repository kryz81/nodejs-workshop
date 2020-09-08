const { createReadStream } = require('fs');

const stream = createReadStream('./test.txt');

// https://nodejs.org/dist/latest-v14.x/docs/api/stream.html#stream_class_stream_readable

let content = '';

stream.on('open', () => console.log('File opened for read'));

stream.on('data', (dataChunk) => {
  content += dataChunk;
});

stream.on('end', () => {
  console.log('All data has been read');
  console.log(content);
});

stream.on('error', (err) => {
  console.log(err.message);
});
