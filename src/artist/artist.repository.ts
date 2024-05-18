import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Artist } from './artist.entity'
import { Repository } from 'typeorm'
import { ArtistCreate } from './artist.dto'

@Injectable()
export class ArtistRepository {
  constructor(
    @InjectRepository(Artist)
    private ArtistRepository: Repository<Artist>,
  ) {}

  async create(artistCreate: ArtistCreate): Promise<Artist> {
    const artist = new Artist()
    artist.email = artistCreate.email
    artist.password = artistCreate.password
    return this.ArtistRepository.create(artist)
  }

  async getById(id: number): Promise<Artist | null> {
    return this.ArtistRepository.findOne({
      where: {
        id,
      },
    })
  }

  async getByEmail(email: string): Promise<Artist | null> {
    return this.ArtistRepository.findOne({
      where: {
        email,
      },
    })
  }
}
