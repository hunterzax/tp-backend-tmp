import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { QueryShipperNominationFileService } from './query-shipper-nomination-file.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('query-shipper-nomination-file')
@UseGuards(AuthGuard)
export class QueryShipperNominationFileController {
  constructor(private readonly service: QueryShipperNominationFileService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
