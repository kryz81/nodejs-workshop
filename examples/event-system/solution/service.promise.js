class EmployeeService {
  async add(data) {
    console.log('Validating...');

    if (!data.name) {
      throw new Error('Employee name not found');
    }

    console.log('Inserting to DB');

    return Promise.resolve('user-id-1');
  }
}

const service = new EmployeeService();

service
  .add({ name1: 'Employee 1' })
  .then((id) => console.log(id))
  .catch((err) => console.log(`Error: ${err.message}`));
