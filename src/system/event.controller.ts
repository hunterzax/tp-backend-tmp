import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('event')
@UseGuards(AuthGuard)
export class EventController {
  constructor(private readonly service: EventService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
