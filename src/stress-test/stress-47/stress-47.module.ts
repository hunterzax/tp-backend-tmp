import { Module } from '@nestjs/common';
import { Stress47Controller } from './stress-47.controller';
import { Stress47Service } from './stress-47.service';

@Module({
  controllers: [Stress47Controller],
  providers: [Stress47Service],
})
export class Stress47Module {}
