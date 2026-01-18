import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { QualityPlanningService } from './quality-planning.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('quality-planning')
@UseGuards(AuthGuard)
export class QualityPlanningController {
  constructor(private readonly service: QualityPlanningService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
