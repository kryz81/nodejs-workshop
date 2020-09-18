import { Test, TestingModule } from '@nestjs/testing';
import { EventService } from '../utils/event.service';
import { EmployeesRepository } from './employees.repository';
import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService;
  let repo: EmployeesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesService,
        {
          provide: EventService,
          useValue: jest.fn(),
        },
        {
          provide: 'EmployeesRepository',
          useValue: {
            getEmployeeById: jest.fn(() => ({
              id: '10',
              firstname: 'A',
              lastname: 'B',
            })),
          },
        },
      ],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
    repo = module.get<EmployeesRepository>('EmployeesRepository');
  });

  it('returns users with id', async () => {
    const result = await service.getEmployee('10');

    expect(result).toEqual({ id: '10', firstname: 'A', lastname: 'B' });
    expect(repo.getEmployeeById).toBeCalledWith('10');
  });
});
