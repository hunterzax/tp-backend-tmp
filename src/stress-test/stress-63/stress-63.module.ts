import { Module } from '@nestjs/common';
import { Stress63Controller } from './stress-63.controller';
import { Stress63Service } from './stress-63.service';

@Module({
  controllers: [Stress63Controller],
  providers: [Stress63Service],
})
export class Stress63Module {}
