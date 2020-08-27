const { readFile } = require('fs');

readFile('non-existing', (err, data) => {
  if (err) {
    // ...
    return;
  }

  return data;
});
