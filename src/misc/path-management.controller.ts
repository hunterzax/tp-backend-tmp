import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PathManagementService } from './path-management.service';
import { CreatePathManagementDto } from './dto/create-path-management.dto';
import { UpdatePathManagementDto } from './dto/update-path-management.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('path-management')
@UseGuards(AuthGuard)
export class PathManagementController {
  constructor(private readonly service: PathManagementService) {}

  @Post()
  create(@Body() createDto: CreatePathManagementDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdatePathManagementDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
