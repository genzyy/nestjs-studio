import { Module } from '@nestjs/common'
import { DrumRepository } from './drum.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Drum } from './drum.entity'
import { DrumController } from './drum.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Drum])],
  controllers: [DrumController],
  providers: [DrumRepository],
  exports: [DrumRepository],
})
export class DrumModule {}
