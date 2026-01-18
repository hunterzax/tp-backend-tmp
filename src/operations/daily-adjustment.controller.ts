import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DailyAdjustmentService } from './daily-adjustment.service';
import { CreateDailyAdjustmentDto } from './dto/create-daily-adjustment.dto';
import { UpdateDailyAdjustmentDto } from './dto/update-daily-adjustment.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('daily-adjustment')
@UseGuards(AuthGuard)
export class DailyAdjustmentController {
  constructor(private readonly service: DailyAdjustmentService) {}

  @Post()
  create(@Body() createDto: CreateDailyAdjustmentDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateDailyAdjustmentDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
