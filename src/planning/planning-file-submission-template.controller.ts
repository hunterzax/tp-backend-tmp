import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PlanningFileSubmissionTemplateService } from './planning-file-submission-template.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('planning-file-submission-template')
@UseGuards(AuthGuard)
export class PlanningFileSubmissionTemplateController {
  constructor(private readonly service: PlanningFileSubmissionTemplateService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
