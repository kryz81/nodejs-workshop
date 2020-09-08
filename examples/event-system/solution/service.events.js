const { EventEmitter } = require('events');

class EmployeeService extends EventEmitter {
  async add(data) {
    this.emit('validation', data);

    if (!data.name) {
      this.emit('error', new Error('Name not found'));
    }

    console.log('Inserting to DB');

    this.emit('added', { id: 'user-id-1' });
  }
}

const service = new EmployeeService();

service.on('validation', (data) => {
  console.log('validation listener', data);
});

service.on('added', (id) => {
  console.log('user added', id);

  // do other stuff
});

service.on('error', (err) => {
  console.log(`Error occurred: ${err.message}`);
});

service.add({ name: 'Employee' });
