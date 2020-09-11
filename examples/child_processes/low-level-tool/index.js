const { exec } = require('child_process');
const ls = exec('java Tool');

ls.stdout.on('data', (data) => {
  // get tool result
  console.log(data);
});

ls.stderr.on('data', (data) => {
  // when the child process throws error
  console.error(`[child error] ${data}`);
});

ls.on('close', (code) => {
  // when the child process closes
  console.log('[child closed]');
});
