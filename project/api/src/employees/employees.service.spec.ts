import { EventService } from '../utils/event.service';
import { GenerateIdService } from '../utils/generateid.service';
import { EmployeesRepository } from './employees.repository';
import { EmployeesService } from './employees.service';

describe('Employees Service', () => {
  let employeesService: EmployeesService;
  let eventService;

  beforeEach(() => {
    const employeesRepository = {
      addEmployee: () => {},
    };
    const generateIdService = {
      generateId: () => 10,
    };
    eventService = {
      emit: jest.fn(),
    };

    employeesService = new EmployeesService(
      employeesRepository as any,
      generateIdService as any,
      eventService as any,
    );
  });

  it('adds user', async () => {
    const dto = {
      firstname: 'Tim',
      lastname: 'Tester',
      role: 'Senior Consultant',
      department: 'LoB',
      hired: 2010,
    };

    const result = await employeesService.addEmployee(dto);

    expect(result).toEqual({ ...dto, id: 10 });
  });

  it('emits event with created user', async () => {
    const dto = {
      firstname: 'Tim',
      lastname: 'Tester',
      role: 'Senior Consultant',
      department: 'LoB',
      hired: 2010,
    };

    await employeesService.addEmployee(dto);

    expect(eventService.emit).toBeCalledWith('add_employee', {
      ...dto,
      id: 10,
    });
  });
});
/*

function addEmployee(data, cb) {
  // add employee
  cb(null, { ...data, id: 10 });
}

it('tests', (done) => {
  addEmployee({ name: 'test' }, (err, result) => {
    expect(result).toEqual({ name: 'test', id: 10 });
    done();
  });
});
*/
