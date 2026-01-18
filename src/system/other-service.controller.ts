import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { OtherServiceService } from './other-service.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('other-service')
@UseGuards(AuthGuard)
export class OtherServiceController {
  constructor(private readonly service: OtherServiceService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
