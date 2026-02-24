import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { HabitsService, type Habit } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';

@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Get()
  async getAllHabits(): Promise<Habit[]> {
    return this.habitsService.findAll();
  }

  @Get(':id')
  getHabit(@Param('id') id: string): Habit {
    return this.habitsService.findOne(id);
  }

  /*
  @Post()
  createHabit(@Body('name') name: string): Habit {
    return this.habitsService.create(name);
  }*/

  @Post()
  createHabit(@Body() CreateHabitDto: CreateHabitDto) {
    return this.habitsService.create(CreateHabitDto.name);
  }

  @Put(':id')
  updateHabit(
    @Param('id') id: string,
    @Body('isCompleted') isCompleted: boolean,
  ): Habit {
    return this.habitsService.update(id, isCompleted);
  }

  @Delete(':id')
  deleteHabit(@Param('id') id: string): void {
    return this.habitsService.delete(id);
  }
}
