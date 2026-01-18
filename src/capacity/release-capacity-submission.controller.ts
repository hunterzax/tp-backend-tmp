import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ReleaseCapacitySubmissionService } from './release-capacity-submission.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('release-capacity-submission')
@UseGuards(AuthGuard)
export class ReleaseCapacitySubmissionController {
  constructor(private readonly service: ReleaseCapacitySubmissionService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
