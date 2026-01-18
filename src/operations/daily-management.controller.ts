import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { DailyManagementService } from './daily-management.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('daily-management')
@UseGuards(AuthGuard)
export class DailyManagementController {
  constructor(private readonly service: DailyManagementService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
