import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AstosService } from './astos.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('astos')
@UseGuards(AuthGuard)
export class AstosController {
  constructor(private readonly service: AstosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
