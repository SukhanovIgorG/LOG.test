import { User } from './../../users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  agent: string;

  @ManyToOne(() => User, (user) => user.sessions)
  user: User;
}
