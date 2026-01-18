import { Module } from '@nestjs/common';
import { Stress73Controller } from './stress-73.controller';
import { Stress73Service } from './stress-73.service';

@Module({
  controllers: [Stress73Controller],
  providers: [Stress73Service],
})
export class Stress73Module {}
