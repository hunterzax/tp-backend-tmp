import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AllocationModeService } from './allocation-mode.service';
import { CreateAllocationModeDto } from './dto/create-allocation-mode.dto';
import { UpdateAllocationModeDto } from './dto/update-allocation-mode.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('allocation-mode')
@UseGuards(AuthGuard)
export class AllocationModeController {
  constructor(private readonly service: AllocationModeService) {}

  @Post()
  create(@Body() createDto: CreateAllocationModeDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateAllocationModeDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
