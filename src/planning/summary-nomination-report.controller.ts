import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SummaryNominationReportService } from './summary-nomination-report.service';
import { CreateSummaryNominationReportDto } from './dto/create-summary-nomination-report.dto';
import { UpdateSummaryNominationReportDto } from './dto/update-summary-nomination-report.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('summary-nomination-report')
@UseGuards(AuthGuard)
export class SummaryNominationReportController {
  constructor(private readonly service: SummaryNominationReportService) {}

  @Post()
  create(@Body() createDto: CreateSummaryNominationReportDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateSummaryNominationReportDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
