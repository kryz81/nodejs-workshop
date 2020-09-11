process.on('message', (message) => {
  if (message.year < 1900) {
    process.exit(1);
    return;
  }

  setTimeout(() => {
    process.send({ result: Math.random() * 100 });
  }, 3000);
});
