import { Module } from '@nestjs/common';
import { Stress72Controller } from './stress-72.controller';
import { Stress72Service } from './stress-72.service';

@Module({
  controllers: [Stress72Controller],
  providers: [Stress72Service],
})
export class Stress72Module {}
