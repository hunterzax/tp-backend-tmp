import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AccountManageService } from './account-manage.service';
import { CreateAccountManageDto } from './dto/create-account-manage.dto';
import { UpdateAccountManageDto } from './dto/update-account-manage.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('account-manage')
@UseGuards(AuthGuard)
export class AccountManageController {
  constructor(private readonly service: AccountManageService) {}

  @Post()
  create(@Body() createDto: CreateAccountManageDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateAccountManageDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
