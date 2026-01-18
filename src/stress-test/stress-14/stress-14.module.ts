import { Module } from '@nestjs/common';
import { Stress14Controller } from './stress-14.controller';
import { Stress14Service } from './stress-14.service';

@Module({
  controllers: [Stress14Controller],
  providers: [Stress14Service],
})
export class Stress14Module {}
