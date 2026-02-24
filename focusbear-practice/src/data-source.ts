import { DataSource } from 'typeorm';
import { Habit } from './modules/habits/entities/habit.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // Or your Docker DB container name, e.g., 'db'
  port: 5432,
  username: 'admin',
  password: 'mysecurepassword',
  database: 'focusbear_dev',
  entities: [Habit], // Add all your entities here
  migrations: ['src/migrations/*.ts'], // Where your migrations will live
  synchronize: false, // CRITICAL: Must be false when using migrations!
});
