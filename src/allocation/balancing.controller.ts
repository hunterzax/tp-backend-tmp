import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { BalancingService } from './balancing.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('balancing')
@UseGuards(AuthGuard)
export class BalancingController {
  constructor(private readonly service: BalancingService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
