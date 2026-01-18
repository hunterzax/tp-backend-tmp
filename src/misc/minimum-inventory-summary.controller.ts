import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MinimumInventorySummaryService } from './minimum-inventory-summary.service';
import { CreateMinimumInventorySummaryDto } from './dto/create-minimum-inventory-summary.dto';
import { UpdateMinimumInventorySummaryDto } from './dto/update-minimum-inventory-summary.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('minimum-inventory-summary')
@UseGuards(AuthGuard)
export class MinimumInventorySummaryController {
  constructor(private readonly service: MinimumInventorySummaryService) {}

  @Post()
  create(@Body() createDto: CreateMinimumInventorySummaryDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateMinimumInventorySummaryDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
