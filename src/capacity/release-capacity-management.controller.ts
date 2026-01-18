import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReleaseCapacityManagementService } from './release-capacity-management.service';
import { CreateReleaseCapacityManagementDto } from './dto/create-release-capacity-management.dto';
import { UpdateReleaseCapacityManagementDto } from './dto/update-release-capacity-management.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('release-capacity-management')
@UseGuards(AuthGuard)
export class ReleaseCapacityManagementController {
  constructor(private readonly service: ReleaseCapacityManagementService) {}

  @Post()
  create(@Body() createDto: CreateReleaseCapacityManagementDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateReleaseCapacityManagementDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
