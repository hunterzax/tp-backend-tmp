import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { QueryShipperPlanningFileService } from './query-shipper-planning-file.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('query-shipper-planning-file')
@UseGuards(AuthGuard)
export class QueryShipperPlanningFileController {
  constructor(private readonly service: QueryShipperPlanningFileService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
