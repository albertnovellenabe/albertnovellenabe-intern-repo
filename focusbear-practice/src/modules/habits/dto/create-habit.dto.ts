import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
export class CreateHabitDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}
