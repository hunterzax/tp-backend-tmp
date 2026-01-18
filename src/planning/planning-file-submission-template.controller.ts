import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PlanningFileSubmissionTemplateService } from './planning-file-submission-template.service';
import { CreatePlanningFileSubmissionTemplateDto } from './dto/create-planning-file-submission-template.dto';
import { UpdatePlanningFileSubmissionTemplateDto } from './dto/update-planning-file-submission-template.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('planning-file-submission-template')
@UseGuards(AuthGuard)
export class PlanningFileSubmissionTemplateController {
  constructor(private readonly service: PlanningFileSubmissionTemplateService) {}

  @Post()
  create(@Body() createDto: CreatePlanningFileSubmissionTemplateDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdatePlanningFileSubmissionTemplateDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
