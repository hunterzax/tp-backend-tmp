import { Module } from '@nestjs/common';
import { Stress83Controller } from './stress-83.controller';
import { Stress83Service } from './stress-83.service';

@Module({
  controllers: [Stress83Controller],
  providers: [Stress83Service],
})
export class Stress83Module {}
