import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { MeteringManagementService } from './metering-management.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('metering-management')
@UseGuards(AuthGuard)
export class MeteringManagementController {
  constructor(private readonly service: MeteringManagementService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
