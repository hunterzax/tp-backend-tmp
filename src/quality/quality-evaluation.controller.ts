import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { QualityEvaluationService } from './quality-evaluation.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('quality-evaluation')
@UseGuards(AuthGuard)
export class QualityEvaluationController {
  constructor(private readonly service: QualityEvaluationService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
