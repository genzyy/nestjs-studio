import { Controller, Post, Body, Get } from '@nestjs/common'
import { ArtistUpsert, ArtistCreate } from './artist.dto'
import { ArtistRepository } from './artist.repository'
import { Artist } from './artist.entity'

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistRepository: ArtistRepository) {}

  @Post()
  upsertArtist(@Body() artistUpsert: ArtistUpsert) {
    const artist = this.artistRepository.getByEmail(artistUpsert.email)

    if (artist == null) {
      return this.createNewUser({
        email: artistUpsert.email,
        password: artistUpsert.password,
        name: null,
      })
    }

    return artist
  }

  @Get()
  public getArtists() {
    return []
  }

  private createNewUser(artistCreate: ArtistCreate): Promise<Artist> {
    return this.artistRepository.create(artistCreate)
  }
}
