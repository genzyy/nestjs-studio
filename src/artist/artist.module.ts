import { Module } from '@nestjs/common'
import { ArtistRepository } from './artist.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Artist } from './artist.entity'
import { ArtistController } from './artist.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  controllers: [ArtistController],
  providers: [ArtistRepository],
  exports: [ArtistRepository],
})
export class ArtistModule {}
