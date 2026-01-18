import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('capacity')
@UseGuards(AuthGuard)
export class CapacityController {
  constructor(private readonly service: CapacityService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
