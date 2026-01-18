import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PlanningSubmissionFileService } from './planning-submission-file.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('planning-submission-file')
@UseGuards(AuthGuard)
export class PlanningSubmissionFileController {
  constructor(private readonly service: PlanningSubmissionFileService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
