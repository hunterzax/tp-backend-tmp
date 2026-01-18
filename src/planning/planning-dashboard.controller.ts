import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PlanningDashboardService } from './planning-dashboard.service';
import { CreatePlanningDashboardDto } from './dto/create-planning-dashboard.dto';
import { UpdatePlanningDashboardDto } from './dto/update-planning-dashboard.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('planning-dashboard')
@UseGuards(AuthGuard)
export class PlanningDashboardController {
  constructor(private readonly service: PlanningDashboardService) {}

  @Post()
  create(@Body() createDto: CreatePlanningDashboardDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdatePlanningDashboardDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
