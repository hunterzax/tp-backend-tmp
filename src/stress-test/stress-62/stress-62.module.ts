import { Module } from '@nestjs/common';
import { Stress62Controller } from './stress-62.controller';
import { Stress62Service } from './stress-62.service';

@Module({
  controllers: [Stress62Controller],
  providers: [Stress62Service],
})
export class Stress62Module {}
