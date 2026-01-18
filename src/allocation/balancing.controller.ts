import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BalancingService } from './balancing.service';
import { CreateBalancingDto } from './dto/create-balancing.dto';
import { UpdateBalancingDto } from './dto/update-balancing.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('balancing')
@UseGuards(AuthGuard)
export class BalancingController {
  constructor(private readonly service: BalancingService) {}

  @Post()
  create(@Body() createDto: CreateBalancingDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateBalancingDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
