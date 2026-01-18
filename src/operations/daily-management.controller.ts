import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DailyManagementService } from './daily-management.service';
import { CreateDailyManagementDto } from './dto/create-daily-management.dto';
import { UpdateDailyManagementDto } from './dto/update-daily-management.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('daily-management')
@UseGuards(AuthGuard)
export class DailyManagementController {
  constructor(private readonly service: DailyManagementService) {}

  @Post()
  create(@Body() createDto: CreateDailyManagementDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateDailyManagementDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
