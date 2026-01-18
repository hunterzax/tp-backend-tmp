import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PlanningSubmissionFileService } from './planning-submission-file.service';
import { CreatePlanningSubmissionFileDto } from './dto/create-planning-submission-file.dto';
import { UpdatePlanningSubmissionFileDto } from './dto/update-planning-submission-file.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('planning-submission-file')
@UseGuards(AuthGuard)
export class PlanningSubmissionFileController {
  constructor(private readonly service: PlanningSubmissionFileService) {}

  @Post()
  create(@Body() createDto: CreatePlanningSubmissionFileDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdatePlanningSubmissionFileDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
