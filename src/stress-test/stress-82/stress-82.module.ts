import { Module } from '@nestjs/common';
import { Stress82Controller } from './stress-82.controller';
import { Stress82Service } from './stress-82.service';

@Module({
  controllers: [Stress82Controller],
  providers: [Stress82Service],
})
export class Stress82Module {}
