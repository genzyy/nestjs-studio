import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth_user')
export class AuthUser {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  name!: string;

  @Column()
  age: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamptz' })
  sessionEndedAt: Date;
}
