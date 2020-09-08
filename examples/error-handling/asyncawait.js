function getUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('Invalid ID'));
      return;
    }
    resolve({ user: `User ${id}` });
  });
}

async function compute(id) {
  try {
    const user = await getUser(id);
  } catch (err) {
    console.log(err.message);
  }
}

compute();
