import { Module } from '@nestjs/common';
import { Stress20Controller } from './stress-20.controller';
import { Stress20Service } from './stress-20.service';

@Module({
  controllers: [Stress20Controller],
  providers: [Stress20Service],
})
export class Stress20Module {}
