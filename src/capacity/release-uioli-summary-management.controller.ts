import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ReleaseUioliSummaryManagementService } from './release-uioli-summary-management.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('release-uioli-summary-management')
@UseGuards(AuthGuard)
export class ReleaseUioliSummaryManagementController {
  constructor(private readonly service: ReleaseUioliSummaryManagementService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
