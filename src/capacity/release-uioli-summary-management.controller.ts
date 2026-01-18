import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReleaseUioliSummaryManagementService } from './release-uioli-summary-management.service';
import { CreateReleaseUioliSummaryManagementDto } from './dto/create-release-uioli-summary-management.dto';
import { UpdateReleaseUioliSummaryManagementDto } from './dto/update-release-uioli-summary-management.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('release-uioli-summary-management')
@UseGuards(AuthGuard)
export class ReleaseUioliSummaryManagementController {
  constructor(private readonly service: ReleaseUioliSummaryManagementService) {}

  @Post()
  create(@Body() createDto: CreateReleaseUioliSummaryManagementDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateReleaseUioliSummaryManagementDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
