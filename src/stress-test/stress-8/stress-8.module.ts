import { Module } from '@nestjs/common';
import { Stress8Controller } from './stress-8.controller';
import { Stress8Service } from './stress-8.service';

@Module({
  controllers: [Stress8Controller],
  providers: [Stress8Service],
})
export class Stress8Module {}
