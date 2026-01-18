import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { NominationDashboardService } from './nomination-dashboard.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('nomination-dashboard')
@UseGuards(AuthGuard)
export class NominationDashboardController {
  constructor(private readonly service: NominationDashboardService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
