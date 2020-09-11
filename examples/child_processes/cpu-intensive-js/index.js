const { fork } = require('child_process');

const child = fork('./child.js', { silent: true });

child.once('message', (message) => {
  console.log('[result received]', message);
  process.exit(0);
});

child.once('exit', (code) => {
  console.log(`[exit] ${code}`);
});

child.send({ userId: 20, year: 2020 });
