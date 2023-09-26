import { SessionsService } from './../sessions/sessions.service';
import { AuthLoginDto } from './dto/auth.dto';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly sessionsService: SessionsService,
  ) {}

  @Post('login')
  async login(@Body() dto: AuthLoginDto) {
    const { login, password } = dto;
    console.log('dto :>> ', dto);
    const user = await this.userService.findOneByLogin(login);
    console.log('user :>> ', user);
    if (user?.password === password) {
      return { status: 200 };
    } else {
      return { status: 401 };
    }
    const sessions = await this.sessionsService.create({
      agent: 'IOS',
      user: user,
    });
    user.sessions.push(sessions.id);
    // const session = ''
  }

  @Post('registrations')
  async registrations(@Body() dto: CreateUserDto) {
    const { login, password } = dto;
    const res = this.userService.create(dto);
    if (res) this.login({ login, password });
  }
}
