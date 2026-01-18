import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QualityEvaluationService } from './quality-evaluation.service';
import { CreateQualityEvaluationDto } from './dto/create-quality-evaluation.dto';
import { UpdateQualityEvaluationDto } from './dto/update-quality-evaluation.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('quality-evaluation')
@UseGuards(AuthGuard)
export class QualityEvaluationController {
  constructor(private readonly service: QualityEvaluationService) {}

  @Post()
  create(@Body() createDto: CreateQualityEvaluationDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateQualityEvaluationDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
