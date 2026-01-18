import { Module } from '@nestjs/common';
import { Stress60Controller } from './stress-60.controller';
import { Stress60Service } from './stress-60.service';

@Module({
  controllers: [Stress60Controller],
  providers: [Stress60Service],
})
export class Stress60Module {}
