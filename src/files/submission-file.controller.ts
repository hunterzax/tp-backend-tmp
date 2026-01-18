import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SubmissionFileService } from './submission-file.service';
import { CreateSubmissionFileDto } from './dto/create-submission-file.dto';
import { UpdateSubmissionFileDto } from './dto/update-submission-file.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('submission-file')
@UseGuards(AuthGuard)
export class SubmissionFileController {
  constructor(private readonly service: SubmissionFileService) {}

  @Post()
  create(@Body() createDto: CreateSubmissionFileDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateSubmissionFileDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
