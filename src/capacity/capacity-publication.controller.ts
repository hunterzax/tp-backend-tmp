import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CapacityPublicationService } from './capacity-publication.service';
import { CreateCapacityPublicationDto } from './dto/create-capacity-publication.dto';
import { UpdateCapacityPublicationDto } from './dto/update-capacity-publication.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('capacity-publication')
@UseGuards(AuthGuard)
export class CapacityPublicationController {
  constructor(private readonly service: CapacityPublicationService) {}

  @Post()
  create(@Body() createDto: CreateCapacityPublicationDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateCapacityPublicationDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
