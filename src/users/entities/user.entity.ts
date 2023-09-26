import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Session } from 'src/sessions/entities/session.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToMany(() => Session, (session) => session.user, {
    eager: true,
    onDelete: 'CASCADE',
  })
  sessions?: string[];
}
