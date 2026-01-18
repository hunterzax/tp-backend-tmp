import { Module } from '@nestjs/common';
import { Stress86Controller } from './stress-86.controller';
import { Stress86Service } from './stress-86.service';

@Module({
  controllers: [Stress86Controller],
  providers: [Stress86Service],
})
export class Stress86Module {}
