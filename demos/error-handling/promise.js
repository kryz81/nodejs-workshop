function getUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('Invalid ID'));
      return;
    }
    resolve({ user: `User ${id}` });
  });
}

getUser()
  .then((user) => {})
  .catch((err) => console.log(err.message));
