import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { BulletinBoardService } from './bulletin-board.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('bulletin-board')
@UseGuards(AuthGuard)
export class BulletinBoardController {
  constructor(private readonly service: BulletinBoardService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
