import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UploadTemplateForShipperService } from './upload-template-for-shipper.service';
import { CreateUploadTemplateForShipperDto } from './dto/create-upload-template-for-shipper.dto';
import { UpdateUploadTemplateForShipperDto } from './dto/update-upload-template-for-shipper.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('upload-template-for-shipper')
@UseGuards(AuthGuard)
export class UploadTemplateForShipperController {
  constructor(private readonly service: UploadTemplateForShipperService) {}

  @Post()
  create(@Body() createDto: CreateUploadTemplateForShipperDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateUploadTemplateForShipperDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
