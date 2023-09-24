import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private USERS: any = {
    1: {
      name: '1',
      sessions: ['sdf3cr23cr', 'vdvdva433ef43'],
    },
  };

  private getRandomId = () => Math.trunc(Math.random() * 100000000).toString();

  create(dto: CreateUserDto) {
    const id = this.getRandomId();
    this.USERS[id] = { id, ...dto };
    return dto;
  }

  findAll() {
    return this.USERS;
  }

  findOne(id: number) {
    return this.USERS[id];
  }

  update(id: number, dto: UpdateUserDto) {
    this.USERS[id] = { ...this.USERS[id], ...dto };
    return this.USERS[id];
  }

  remove(id: number) {
    return delete this.USERS[id];
  }
}
