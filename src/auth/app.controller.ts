import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('app')
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
