import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CapacityPublicationService } from './capacity-publication.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('capacity-publication')
@UseGuards(AuthGuard)
export class CapacityPublicationController {
  constructor(private readonly service: CapacityPublicationService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
