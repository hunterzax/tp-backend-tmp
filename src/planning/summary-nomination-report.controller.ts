import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SummaryNominationReportService } from './summary-nomination-report.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('summary-nomination-report')
@UseGuards(AuthGuard)
export class SummaryNominationReportController {
  constructor(private readonly service: SummaryNominationReportService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
