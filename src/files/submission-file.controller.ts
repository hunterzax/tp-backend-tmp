import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SubmissionFileService } from './submission-file.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('submission-file')
@UseGuards(AuthGuard)
export class SubmissionFileController {
  constructor(private readonly service: SubmissionFileService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
