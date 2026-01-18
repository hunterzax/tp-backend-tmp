import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { WaitingListService } from './waiting-list.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('waiting-list')
@UseGuards(AuthGuard)
export class WaitingListController {
  constructor(private readonly service: WaitingListService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
