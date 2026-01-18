import { Module } from '@nestjs/common';
import { Stress38Controller } from './stress-38.controller';
import { Stress38Service } from './stress-38.service';

@Module({
  controllers: [Stress38Controller],
  providers: [Stress38Service],
})
export class Stress38Module {}
