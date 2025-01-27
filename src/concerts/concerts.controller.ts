import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { Concert } from './schemas/concert.schema';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  findAll() {
    return this.concertsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.concertsService.findOne(id);
  }

  @Post()
  create(@Body() concert: Concert) {
    return this.concertsService.create(concert);
  }
}