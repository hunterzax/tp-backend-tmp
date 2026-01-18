import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QueryShipperPlanningFileService } from './query-shipper-planning-file.service';
import { CreateQueryShipperPlanningFileDto } from './dto/create-query-shipper-planning-file.dto';
import { UpdateQueryShipperPlanningFileDto } from './dto/update-query-shipper-planning-file.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('query-shipper-planning-file')
@UseGuards(AuthGuard)
export class QueryShipperPlanningFileController {
  constructor(private readonly service: QueryShipperPlanningFileService) {}

  @Post()
  create(@Body() createDto: CreateQueryShipperPlanningFileDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateQueryShipperPlanningFileDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
