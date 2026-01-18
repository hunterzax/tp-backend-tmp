import { Module } from '@nestjs/common';
import { Stress85Controller } from './stress-85.controller';
import { Stress85Service } from './stress-85.service';

@Module({
  controllers: [Stress85Controller],
  providers: [Stress85Service],
})
export class Stress85Module {}
