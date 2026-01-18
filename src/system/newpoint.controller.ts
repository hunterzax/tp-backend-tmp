import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { NewpointService } from './newpoint.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('newpoint')
@UseGuards(AuthGuard)
export class NewpointController {
  constructor(private readonly service: NewpointService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
