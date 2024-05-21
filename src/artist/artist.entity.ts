import { Drum } from 'src/drum/drum.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

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

  @OneToMany(() => Drum, (drum) => drum.artist)
  drums: Drum[]
}
