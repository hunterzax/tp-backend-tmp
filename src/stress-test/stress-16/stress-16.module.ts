import { Module } from '@nestjs/common';
import { Stress16Controller } from './stress-16.controller';
import { Stress16Service } from './stress-16.service';

@Module({
  controllers: [Stress16Controller],
  providers: [Stress16Service],
})
export class Stress16Module {}
