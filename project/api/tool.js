process.on('message', (message) => {
  if (Math.random() < 0.1) {
    process.exit(1);
    return;
  }

  setTimeout(() => {
    process.send({
      result: {
        employeeId: message.employeeId,
        loggedDays: Math.round(Math.random() * 100),
      },
    });
  }, 3000);
});
