import { Module } from '@nestjs/common';
import { Stress37Controller } from './stress-37.controller';
import { Stress37Service } from './stress-37.service';

@Module({
  controllers: [Stress37Controller],
  providers: [Stress37Service],
})
export class Stress37Module {}
