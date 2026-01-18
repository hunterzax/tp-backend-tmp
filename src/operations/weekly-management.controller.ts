import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { WeeklyManagementService } from './weekly-management.service';
import { CreateWeeklyManagementDto } from './dto/create-weekly-management.dto';
import { UpdateWeeklyManagementDto } from './dto/update-weekly-management.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('weekly-management')
@UseGuards(AuthGuard)
export class WeeklyManagementController {
  constructor(private readonly service: WeeklyManagementService) {}

  @Post()
  create(@Body() createDto: CreateWeeklyManagementDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateWeeklyManagementDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
