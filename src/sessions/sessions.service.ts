import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSessionDto } from './dto/create-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private sessionsRepository: Repository<Session>,
  ) {}

  async create(createSessionDto: CreateSessionDto) {
    return await this.sessionsRepository.create(createSessionDto);
  }

  async remove(id: string) {
    return await this.sessionsRepository.delete({ id });
  }
}
