import { Module } from '@nestjs/common';
import { Stress92Controller } from './stress-92.controller';
import { Stress92Service } from './stress-92.service';

@Module({
  controllers: [Stress92Controller],
  providers: [Stress92Service],
})
export class Stress92Module {}
