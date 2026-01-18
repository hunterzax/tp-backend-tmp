import { Module } from '@nestjs/common';
import { Stress28Controller } from './stress-28.controller';
import { Stress28Service } from './stress-28.service';

@Module({
  controllers: [Stress28Controller],
  providers: [Stress28Service],
})
export class Stress28Module {}
