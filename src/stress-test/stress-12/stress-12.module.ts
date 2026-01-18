import { Module } from '@nestjs/common';
import { Stress12Controller } from './stress-12.controller';
import { Stress12Service } from './stress-12.service';

@Module({
  controllers: [Stress12Controller],
  providers: [Stress12Service],
})
export class Stress12Module {}
