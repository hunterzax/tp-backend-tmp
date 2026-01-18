import { Module } from '@nestjs/common';
import { Stress61Controller } from './stress-61.controller';
import { Stress61Service } from './stress-61.service';

@Module({
  controllers: [Stress61Controller],
  providers: [Stress61Service],
})
export class Stress61Module {}
