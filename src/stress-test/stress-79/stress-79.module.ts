import { Module } from '@nestjs/common';
import { Stress79Controller } from './stress-79.controller';
import { Stress79Service } from './stress-79.service';

@Module({
  controllers: [Stress79Controller],
  providers: [Stress79Service],
})
export class Stress79Module {}
