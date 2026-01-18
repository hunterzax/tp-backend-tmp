import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QueryShipperNominationFileService } from './query-shipper-nomination-file.service';
import { CreateQueryShipperNominationFileDto } from './dto/create-query-shipper-nomination-file.dto';
import { UpdateQueryShipperNominationFileDto } from './dto/update-query-shipper-nomination-file.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('query-shipper-nomination-file')
@UseGuards(AuthGuard)
export class QueryShipperNominationFileController {
  constructor(private readonly service: QueryShipperNominationFileService) {}

  @Post()
  create(@Body() createDto: CreateQueryShipperNominationFileDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateQueryShipperNominationFileDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
