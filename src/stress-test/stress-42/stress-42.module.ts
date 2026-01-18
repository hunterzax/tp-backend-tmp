import { Module } from '@nestjs/common';
import { Stress42Controller } from './stress-42.controller';
import { Stress42Service } from './stress-42.service';

@Module({
  controllers: [Stress42Controller],
  providers: [Stress42Service],
})
export class Stress42Module {}
