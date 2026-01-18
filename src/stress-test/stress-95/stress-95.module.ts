import { Module } from '@nestjs/common';
import { Stress95Controller } from './stress-95.controller';
import { Stress95Service } from './stress-95.service';

@Module({
  controllers: [Stress95Controller],
  providers: [Stress95Service],
})
export class Stress95Module {}
