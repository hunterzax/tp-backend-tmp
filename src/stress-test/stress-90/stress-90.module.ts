import { Module } from '@nestjs/common';
import { Stress90Controller } from './stress-90.controller';
import { Stress90Service } from './stress-90.service';

@Module({
  controllers: [Stress90Controller],
  providers: [Stress90Service],
})
export class Stress90Module {}
