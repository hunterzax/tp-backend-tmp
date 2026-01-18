import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReleaseCapacitySubmissionService } from './release-capacity-submission.service';
import { CreateReleaseCapacitySubmissionDto } from './dto/create-release-capacity-submission.dto';
import { UpdateReleaseCapacitySubmissionDto } from './dto/update-release-capacity-submission.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('release-capacity-submission')
@UseGuards(AuthGuard)
export class ReleaseCapacitySubmissionController {
  constructor(private readonly service: ReleaseCapacitySubmissionService) {}

  @Post()
  create(@Body() createDto: CreateReleaseCapacitySubmissionDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateReleaseCapacitySubmissionDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
