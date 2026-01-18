import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ExportFilesService } from './export-files.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('export-files')
@UseGuards(AuthGuard)
export class ExportFilesController {
  constructor(private readonly service: ExportFilesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
