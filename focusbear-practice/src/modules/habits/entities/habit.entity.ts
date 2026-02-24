import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('habits') // Matches the table name in Postgres
export class Habit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'is_completed', default: false })
  isCompleted: boolean;
}
