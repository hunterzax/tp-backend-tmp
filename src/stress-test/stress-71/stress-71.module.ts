import { Module } from '@nestjs/common';
import { Stress71Controller } from './stress-71.controller';
import { Stress71Service } from './stress-71.service';

@Module({
  controllers: [Stress71Controller],
  providers: [Stress71Service],
})
export class Stress71Module {}
