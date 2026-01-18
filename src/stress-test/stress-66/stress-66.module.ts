import { Module } from '@nestjs/common';
import { Stress66Controller } from './stress-66.controller';
import { Stress66Service } from './stress-66.service';

@Module({
  controllers: [Stress66Controller],
  providers: [Stress66Service],
})
export class Stress66Module {}
