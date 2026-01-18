import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BulletinBoardService } from './bulletin-board.service';
import { CreateBulletinBoardDto } from './dto/create-bulletin-board.dto';
import { UpdateBulletinBoardDto } from './dto/update-bulletin-board.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('bulletin-board')
@UseGuards(AuthGuard)
export class BulletinBoardController {
  constructor(private readonly service: BulletinBoardService) {}

  @Post()
  create(@Body() createDto: CreateBulletinBoardDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateBulletinBoardDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
