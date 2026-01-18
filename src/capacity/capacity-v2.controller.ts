import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CapacityV2Service } from './capacity-v2.service';
import { CreateCapacityV2Dto } from './dto/create-capacity-v2.dto';
import { UpdateCapacityV2Dto } from './dto/update-capacity-v2.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('capacity-v2')
@UseGuards(AuthGuard)
export class CapacityV2Controller {
  constructor(private readonly service: CapacityV2Service) {}

  @Post()
  create(@Body() createDto: CreateCapacityV2Dto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateCapacityV2Dto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
