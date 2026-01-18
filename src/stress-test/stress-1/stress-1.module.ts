import { Module } from '@nestjs/common';
import { Stress1Controller } from './stress-1.controller';
import { Stress1Service } from './stress-1.service';

@Module({
  controllers: [Stress1Controller],
  providers: [Stress1Service],
})
export class Stress1Module {}
