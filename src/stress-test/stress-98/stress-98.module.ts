import { Module } from '@nestjs/common';
import { Stress98Controller } from './stress-98.controller';
import { Stress98Service } from './stress-98.service';

@Module({
  controllers: [Stress98Controller],
  providers: [Stress98Service],
})
export class Stress98Module {}
