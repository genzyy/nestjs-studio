import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export enum Collection {
  METRO = 'metro',
  MUSTARD = 'mustard',
  HITBOY = 'hitboy',
}

@Entity('drum')
export class Drum {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ nullable: false })
  uuid: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  collection: Collection

  @Column({ nullable: false })
  artistId: number

  @Column('timestamptz', { nullable: false })
  createdAt: Date

  @Column('timestamptz', { nullable: true })
  updatedAt: Date | null
}
