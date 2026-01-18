import { Module } from '@nestjs/common';
import { Stress30Controller } from './stress-30.controller';
import { Stress30Service } from './stress-30.service';

@Module({
  controllers: [Stress30Controller],
  providers: [Stress30Service],
})
export class Stress30Module {}
