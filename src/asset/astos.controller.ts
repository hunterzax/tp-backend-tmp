import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AstosService } from './astos.service';
import { CreateAstosDto } from './dto/create-astos.dto';
import { UpdateAstosDto } from './dto/update-astos.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('astos')
@UseGuards(AuthGuard)
export class AstosController {
  constructor(private readonly service: AstosService) {}

  @Post()
  create(@Body() createDto: CreateAstosDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateAstosDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
