import { Module } from '@nestjs/common';
import { Stress99Controller } from './stress-99.controller';
import { Stress99Service } from './stress-99.service';

@Module({
  controllers: [Stress99Controller],
  providers: [Stress99Service],
})
export class Stress99Module {}
