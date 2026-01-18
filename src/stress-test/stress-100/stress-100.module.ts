import { Module } from '@nestjs/common';
import { Stress100Controller } from './stress-100.controller';
import { Stress100Service } from './stress-100.service';

@Module({
  controllers: [Stress100Controller],
  providers: [Stress100Service],
})
export class Stress100Module {}
