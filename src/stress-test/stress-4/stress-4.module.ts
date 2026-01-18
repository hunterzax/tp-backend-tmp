import { Module } from '@nestjs/common';
import { Stress4Controller } from './stress-4.controller';
import { Stress4Service } from './stress-4.service';

@Module({
  controllers: [Stress4Controller],
  providers: [Stress4Service],
})
export class Stress4Module {}
