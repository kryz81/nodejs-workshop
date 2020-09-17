const { watch } = require('fs');

const watcher = watch(`${__dirname}`);

watcher.on('change', async (eventType, filename) => {
  console.log(eventType, filename);
});

watcher.on('error', () => {
  // @todo
});
