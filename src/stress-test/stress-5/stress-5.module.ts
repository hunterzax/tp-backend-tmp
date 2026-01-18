import { Module } from '@nestjs/common';
import { Stress5Controller } from './stress-5.controller';
import { Stress5Service } from './stress-5.service';

@Module({
  controllers: [Stress5Controller],
  providers: [Stress5Service],
})
export class Stress5Module {}
