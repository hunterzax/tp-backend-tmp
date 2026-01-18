import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AccountManageService } from './account-manage.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('account-manage')
@UseGuards(AuthGuard)
export class AccountManageController {
  constructor(private readonly service: AccountManageService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
