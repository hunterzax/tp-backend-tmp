import { Module } from '@nestjs/common';
import { Stress75Controller } from './stress-75.controller';
import { Stress75Service } from './stress-75.service';

@Module({
  controllers: [Stress75Controller],
  providers: [Stress75Service],
})
export class Stress75Module {}
