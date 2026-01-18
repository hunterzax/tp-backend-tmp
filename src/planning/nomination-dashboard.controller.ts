import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NominationDashboardService } from './nomination-dashboard.service';
import { CreateNominationDashboardDto } from './dto/create-nomination-dashboard.dto';
import { UpdateNominationDashboardDto } from './dto/update-nomination-dashboard.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('nomination-dashboard')
@UseGuards(AuthGuard)
export class NominationDashboardController {
  constructor(private readonly service: NominationDashboardService) {}

  @Post()
  create(@Body() createDto: CreateNominationDashboardDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateNominationDashboardDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
