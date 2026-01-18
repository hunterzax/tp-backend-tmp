import { Module } from '@nestjs/common';
import { Stress26Controller } from './stress-26.controller';
import { Stress26Service } from './stress-26.service';

@Module({
  controllers: [Stress26Controller],
  providers: [Stress26Service],
})
export class Stress26Module {}
