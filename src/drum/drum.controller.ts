import { Body, Controller, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { DrumCreate } from './drum.dto'
import { DrumRepository } from './drum.repository'

@Controller('drum')
export class DrumController {
  constructor(private readonly drumRepository: DrumRepository) {}

  @Post()
  createNewDrum(@Body() drumCreate: DrumCreate, @Req() req: Request) {
    console.log(req.body)
    return this.drumRepository.create(drumCreate, 1)
  }
}
