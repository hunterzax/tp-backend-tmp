import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AssetService } from './asset.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('asset')
@UseGuards(AuthGuard)
export class AssetController {
  constructor(private readonly service: AssetService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
