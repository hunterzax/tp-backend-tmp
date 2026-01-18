import { Module } from '@nestjs/common';
import { Stress74Controller } from './stress-74.controller';
import { Stress74Service } from './stress-74.service';

@Module({
  controllers: [Stress74Controller],
  providers: [Stress74Service],
})
export class Stress74Module {}
