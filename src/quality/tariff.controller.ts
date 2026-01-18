import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TariffService } from './tariff.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('tariff')
@UseGuards(AuthGuard)
export class TariffController {
  constructor(private readonly service: TariffService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
