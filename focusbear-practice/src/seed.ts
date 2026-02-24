import { AppDataSource } from './data-source';
import { Habit } from './modules/habits/entities/habit.entity';

async function seed() {
  await AppDataSource.initialize();
  const habitRepo = AppDataSource.getRepository(Habit);

  const habits = [
    { name: 'Drink 2L of Water', isCompleted: false },
    { name: 'Read 10 pages', isCompleted: false },
  ];

  for (const habitData of habits) {
    // 1. Check if a habit with this name already exists
    const existingHabit = await habitRepo.findOneBy({ name: habitData.name });

    // 2. Only save it if it DOES NOT exist
    if (!existingHabit) {
      const habit = habitRepo.create(habitData);
      await habitRepo.save(habit);
      console.log(`➕ Added: ${habitData.name}`);
    } else {
      console.log(`⏩ Skipped (Already exists): ${habitData.name}`);
    }
  }

  console.log('✅ Seeding complete!');
  await AppDataSource.destroy();
}

seed().catch((error) => console.error(error));
