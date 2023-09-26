import { IsString } from 'class-validator';

export class AuthRegisterDto {
  @IsString()
  login: string;

  @IsString()
  password: string;
}

export class AuthLoginDto extends AuthRegisterDto {}
