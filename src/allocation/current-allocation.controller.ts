import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CurrentAllocationService } from './current-allocation.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('current-allocation')
@UseGuards(AuthGuard)
export class CurrentAllocationController {
  constructor(private readonly service: CurrentAllocationService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
