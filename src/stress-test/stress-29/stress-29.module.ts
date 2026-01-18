import { Module } from '@nestjs/common';
import { Stress29Controller } from './stress-29.controller';
import { Stress29Service } from './stress-29.service';

@Module({
  controllers: [Stress29Controller],
  providers: [Stress29Service],
})
export class Stress29Module {}
