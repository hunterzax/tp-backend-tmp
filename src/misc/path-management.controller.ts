import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PathManagementService } from './path-management.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('path-management')
@UseGuards(AuthGuard)
export class PathManagementController {
  constructor(private readonly service: PathManagementService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
