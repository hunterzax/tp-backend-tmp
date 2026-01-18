import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { WeeklyManagementService } from './weekly-management.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('weekly-management')
@UseGuards(AuthGuard)
export class WeeklyManagementController {
  constructor(private readonly service: WeeklyManagementService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
