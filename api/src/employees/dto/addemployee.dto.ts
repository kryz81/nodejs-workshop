import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AddEmployeeDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsString()
  place: string;

  @IsOptional()
  @IsNumber()
  hiredOn?: number;
}
