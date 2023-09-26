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
  async login(
    @Body() { login, password }: AuthLoginDto,
    @Req() request: Request,
  ) {
    const user = await this.userService.findOneByLogin(login);
    if (user.password === password) {
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
    const newUser = this.userService.create(dto);
    // if (newUser) this.login(dto);
  }
}
