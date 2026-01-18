import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MeteringManagementService } from './metering-management.service';
import { CreateMeteringManagementDto } from './dto/create-metering-management.dto';
import { UpdateMeteringManagementDto } from './dto/update-metering-management.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('metering-management')
@UseGuards(AuthGuard)
export class MeteringManagementController {
  constructor(private readonly service: MeteringManagementService) {}

  @Post()
  create(@Body() createDto: CreateMeteringManagementDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateMeteringManagementDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
