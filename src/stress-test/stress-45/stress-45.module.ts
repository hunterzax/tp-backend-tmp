import { Module } from '@nestjs/common';
import { Stress45Controller } from './stress-45.controller';
import { Stress45Service } from './stress-45.service';

@Module({
  controllers: [Stress45Controller],
  providers: [Stress45Service],
})
export class Stress45Module {}
