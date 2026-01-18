import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QualityPlanningService } from './quality-planning.service';
import { CreateQualityPlanningDto } from './dto/create-quality-planning.dto';
import { UpdateQualityPlanningDto } from './dto/update-quality-planning.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('quality-planning')
@UseGuards(AuthGuard)
export class QualityPlanningController {
  constructor(private readonly service: QualityPlanningService) {}

  @Post()
  create(@Body() createDto: CreateQualityPlanningDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateQualityPlanningDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
