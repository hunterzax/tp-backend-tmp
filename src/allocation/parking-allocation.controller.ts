import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ParkingAllocationService } from './parking-allocation.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('parking-allocation')
@UseGuards(AuthGuard)
export class ParkingAllocationController {
  constructor(private readonly service: ParkingAllocationService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
