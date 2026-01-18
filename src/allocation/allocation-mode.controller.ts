import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AllocationModeService } from './allocation-mode.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('allocation-mode')
@UseGuards(AuthGuard)
export class AllocationModeController {
  constructor(private readonly service: AllocationModeService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
