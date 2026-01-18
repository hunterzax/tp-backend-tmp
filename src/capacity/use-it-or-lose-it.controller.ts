import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UseItOrLoseItService } from './use-it-or-lose-it.service';
import { CreateUseItOrLoseItDto } from './dto/create-use-it-or-lose-it.dto';
import { UpdateUseItOrLoseItDto } from './dto/update-use-it-or-lose-it.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('use-it-or-lose-it')
@UseGuards(AuthGuard)
export class UseItOrLoseItController {
  constructor(private readonly service: UseItOrLoseItService) {}

  @Post()
  create(@Body() createDto: CreateUseItOrLoseItDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateUseItOrLoseItDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
