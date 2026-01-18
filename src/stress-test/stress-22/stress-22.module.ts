import { Module } from '@nestjs/common';
import { Stress22Controller } from './stress-22.controller';
import { Stress22Service } from './stress-22.service';

@Module({
  controllers: [Stress22Controller],
  providers: [Stress22Service],
})
export class Stress22Module {}
