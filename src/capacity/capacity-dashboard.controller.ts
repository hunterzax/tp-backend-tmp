import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CapacityDashboardService } from './capacity-dashboard.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('capacity-dashboard')
@UseGuards(AuthGuard)
export class CapacityDashboardController {
  constructor(private readonly service: CapacityDashboardService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
