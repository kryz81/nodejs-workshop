// not caught throw new Error
process.on('uncaughtException', (err) => {
  console.log(err.message);
});

// not caught promise rejection
process.on('unhandledRejection', (err) => {
  console.log(err.message);
});

function getData(data) {
  throw new Error('Invalid data [error thrown]');
}

function getData2(data) {
  return Promise.reject(new Error('Invalid data [promise rejection]'));
}

getData2(10);
