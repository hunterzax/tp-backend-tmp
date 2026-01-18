import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CurrentAllocationService } from './current-allocation.service';
import { CreateCurrentAllocationDto } from './dto/create-current-allocation.dto';
import { UpdateCurrentAllocationDto } from './dto/update-current-allocation.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('current-allocation')
@UseGuards(AuthGuard)
export class CurrentAllocationController {
  constructor(private readonly service: CurrentAllocationService) {}

  @Post()
  create(@Body() createDto: CreateCurrentAllocationDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateCurrentAllocationDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
