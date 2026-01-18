import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UseItOrLoseItService } from './use-it-or-lose-it.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('use-it-or-lose-it')
@UseGuards(AuthGuard)
export class UseItOrLoseItController {
  constructor(private readonly service: UseItOrLoseItService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
