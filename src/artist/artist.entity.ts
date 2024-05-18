import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('artist')
export class Artist {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column()
  email!: string

  @Column()
  password: string

  @Column()
  name!: string

  @Column()
  age: string

  @Column({ type: 'timestamptz', nullable: false })
  createdAt!: Date

  @Column({ type: 'timestamptz', nullable: true })
  updatedAt: Date

  @Column({ type: 'timestamptz' })
  sessionEndedAt: Date
}
