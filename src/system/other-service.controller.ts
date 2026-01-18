import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OtherServiceService } from './other-service.service';
import { CreateOtherServiceDto } from './dto/create-other-service.dto';
import { UpdateOtherServiceDto } from './dto/update-other-service.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('other-service')
@UseGuards(AuthGuard)
export class OtherServiceController {
  constructor(private readonly service: OtherServiceService) {}

  @Post()
  create(@Body() createDto: CreateOtherServiceDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateOtherServiceDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
