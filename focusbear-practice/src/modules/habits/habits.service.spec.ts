import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HabitsService } from './habits.service';
import { Habit } from './entities/habit.entity';

describe('HabitsService', () => {
  let service: HabitsService;

  const mockHabitsRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((habit) => Promise.resolve({ id: 1, ...habit })),
    find: jest.fn().mockResolvedValue([{ id: 1, name: 'Morning Walk' }]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HabitsService,
        {
          provide: getRepositoryToken(Habit),
          useValue: mockHabitsRepository,
        },
      ],
    }).compile();

    service = module.get<HabitsService>(HabitsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should successfully create and save a new habit', async () => {
    const newHabitDto = {
      name: 'Read 10 Pages',
      privateNotes: 'Testing encryption',
    };

    const result = await service.create(newHabitDto);

    expect(mockHabitsRepository.create).toHaveBeenCalledWith(newHabitDto);
    expect(mockHabitsRepository.save).toHaveBeenCalled();
    expect(result).toEqual({
      id: 1,
      name: 'Read 10 Pages',
      privateNotes: 'Testing encryption',
    });
  });
});
