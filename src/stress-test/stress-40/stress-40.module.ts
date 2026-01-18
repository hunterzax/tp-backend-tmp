import { Module } from '@nestjs/common';
import { Stress40Controller } from './stress-40.controller';
import { Stress40Service } from './stress-40.service';

@Module({
  controllers: [Stress40Controller],
  providers: [Stress40Service],
})
export class Stress40Module {}
