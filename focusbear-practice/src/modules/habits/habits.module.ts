import { Module } from '@nestjs/common';
import { HabitsController } from './habits.controller';
import { HabitsService } from './habits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habit } from './entities/habit.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Habit])],
  controllers: [HabitsController],
  providers: [HabitsService],
})
export class HabitsModule {}
