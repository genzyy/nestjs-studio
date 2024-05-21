import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Drum } from './drum.entity'
import { Repository } from 'typeorm'
import { DrumCreate } from './drum.dto'

@Injectable()
export class DrumRepository {
  constructor(
    @InjectRepository(Drum)
    private drumRepository: Repository<Drum>,
  ) {}

  async create(drumCreate: DrumCreate, artistId: number): Promise<Drum> {
    const drum = new Drum()
    drum.name = drumCreate.name
    drum.collection = drumCreate.collection
    drum.artistId = artistId
    return this.drumRepository.create(drum)
  }
}
