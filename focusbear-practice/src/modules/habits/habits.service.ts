import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHabitDto } from './dto/create-habit.dto';

export class Habit {
  id: string;
  name: string;
  isCompleted: boolean;
}

@Injectable()
export class HabitsService {
  constructor(
    @InjectRepository(Habit)
    private habitsRepository: Repository<Habit>,
  ) {}
  private habits: Habit[] = [];

  /*
  findAll(): Habit[] {
    return this.habits;
  }*/
  async findAll(): Promise<Habit[]> {
    // Directly queries: SELECT * FROM habits;
    return this.habitsRepository.find();
  }

  findOne(id: string): Habit {
    const habit = this.habits.find((h) => h.id === id);
    if (!habit) {
      throw new NotFoundException(`Habit with ID ${id} not found`);
    }
    return habit;
  }

  /*
  create(name: string): Habit {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      isCompleted: false,
    };
    this.habits.push(newHabit);

    return newHabit;
  }*/

  async create(CreateHabitDto: CreateHabitDto) {
    const newHabit = this.habitsRepository.create(CreateHabitDto);

    return this.habitsRepository.save(newHabit);
  }

  update(id: string, isCompleted: boolean): Habit {
    const habit = this.findOne(id);
    habit.isCompleted = isCompleted;
    return habit;
  }

  delete(id: string): void {
    const index = this.habits.findIndex((h) => h.id === id);
    if (index === -1) {
      throw new NotFoundException(`Habit with ID ${id} not found`);
    }

    this.habits.splice(index, 1);
  }
}
