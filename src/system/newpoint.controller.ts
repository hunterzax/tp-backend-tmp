import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NewpointService } from './newpoint.service';
import { CreateNewpointDto } from './dto/create-newpoint.dto';
import { UpdateNewpointDto } from './dto/update-newpoint.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('newpoint')
@UseGuards(AuthGuard)
export class NewpointController {
  constructor(private readonly service: NewpointService) {}

  @Post()
  create(@Body() createDto: CreateNewpointDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateNewpointDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
