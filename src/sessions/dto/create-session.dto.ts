import { IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateSessionDto {
  @IsString()
  agent: string;

  user: User;
}
