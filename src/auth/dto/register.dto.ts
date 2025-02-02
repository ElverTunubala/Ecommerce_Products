import { PartialType } from '@nestjs/swagger';
import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { LoginAuthDto } from './login.dto';
import { Role } from '../../roles/roles.enum';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @IsString()
  username: string;
  
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  @IsDate()
  @IsDateString()  
  created_at: Date;

  @IsDate()
  @IsDateString()  
  updated_at: Date;
  
}
