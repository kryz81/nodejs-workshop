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

  @IsOptional()
  @IsNumber()
  hired?: number;
}

export class AddEmployeeWithIdDto extends AddEmployeeDto {
  id: string;
}
