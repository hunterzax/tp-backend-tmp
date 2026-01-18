import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PlanningDashboardService } from './planning-dashboard.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('planning-dashboard')
@UseGuards(AuthGuard)
export class PlanningDashboardController {
  constructor(private readonly service: PlanningDashboardService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
