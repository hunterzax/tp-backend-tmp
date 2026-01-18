import { Module } from '@nestjs/common';
import { Stress39Controller } from './stress-39.controller';
import { Stress39Service } from './stress-39.service';

@Module({
  controllers: [Stress39Controller],
  providers: [Stress39Service],
})
export class Stress39Module {}
