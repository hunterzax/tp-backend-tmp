import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { MinimumInventorySummaryService } from './minimum-inventory-summary.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('minimum-inventory-summary')
@UseGuards(AuthGuard)
export class MinimumInventorySummaryController {
  constructor(private readonly service: MinimumInventorySummaryService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
