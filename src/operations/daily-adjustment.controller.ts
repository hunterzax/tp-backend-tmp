import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { DailyAdjustmentService } from './daily-adjustment.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('daily-adjustment')
@UseGuards(AuthGuard)
export class DailyAdjustmentController {
  constructor(private readonly service: DailyAdjustmentService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
