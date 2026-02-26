import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
import * as dotenv from 'dotenv';

dotenv.config();

@Entity('habits')
export class Habit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'is_completed', default: false })
  isCompleted: boolean;

  @Column({
    type: 'text',
    nullable: true,
    transformer: new EncryptionTransformer({
      key: process.env.DB_ENCRYPTION_KEY as string,
      algorithm: 'aes-256-cbc',
      ivLength: 16,
    }),
  })
  privateNotes: string;
}
