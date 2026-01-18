import { Module } from '@nestjs/common';
import { Stress93Controller } from './stress-93.controller';
import { Stress93Service } from './stress-93.service';

@Module({
  controllers: [Stress93Controller],
  providers: [Stress93Service],
})
export class Stress93Module {}
