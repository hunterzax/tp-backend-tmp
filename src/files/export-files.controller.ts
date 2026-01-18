import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ExportFilesService } from './export-files.service';
import { CreateExportFilesDto } from './dto/create-export-files.dto';
import { UpdateExportFilesDto } from './dto/update-export-files.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('export-files')
@UseGuards(AuthGuard)
export class ExportFilesController {
  constructor(private readonly service: ExportFilesService) {}

  @Post()
  create(@Body() createDto: CreateExportFilesDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateExportFilesDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
