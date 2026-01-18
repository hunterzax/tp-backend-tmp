import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UploadTemplateForShipperService } from './upload-template-for-shipper.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('upload-template-for-shipper')
@UseGuards(AuthGuard)
export class UploadTemplateForShipperController {
  constructor(private readonly service: UploadTemplateForShipperService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
