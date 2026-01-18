import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ReleaseCapacityManagementService } from './release-capacity-management.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('release-capacity-management')
@UseGuards(AuthGuard)
export class ReleaseCapacityManagementController {
  constructor(private readonly service: ReleaseCapacityManagementService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
