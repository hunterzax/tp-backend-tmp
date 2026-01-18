import { Module } from '@nestjs/common';
import { Stress6Controller } from './stress-6.controller';
import { Stress6Service } from './stress-6.service';

@Module({
  controllers: [Stress6Controller],
  providers: [Stress6Service],
})
export class Stress6Module {}
