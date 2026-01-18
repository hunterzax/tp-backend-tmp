import { Module } from '@nestjs/common';
import { Stress53Controller } from './stress-53.controller';
import { Stress53Service } from './stress-53.service';

@Module({
  controllers: [Stress53Controller],
  providers: [Stress53Service],
})
export class Stress53Module {}
