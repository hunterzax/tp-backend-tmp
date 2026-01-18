import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CapacityDashboardService } from './capacity-dashboard.service';
import { CreateCapacityDashboardDto } from './dto/create-capacity-dashboard.dto';
import { UpdateCapacityDashboardDto } from './dto/update-capacity-dashboard.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('capacity-dashboard')
@UseGuards(AuthGuard)
export class CapacityDashboardController {
  constructor(private readonly service: CapacityDashboardService) {}

  @Post()
  create(@Body() createDto: CreateCapacityDashboardDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateCapacityDashboardDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
