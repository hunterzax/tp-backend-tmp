import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CapacityV2Service } from './capacity-v2.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('capacity-v2')
@UseGuards(AuthGuard)
export class CapacityV2Controller {
  constructor(private readonly service: CapacityV2Service) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
