import { Module } from '@nestjs/common';
import { Stress23Controller } from './stress-23.controller';
import { Stress23Service } from './stress-23.service';

@Module({
  controllers: [Stress23Controller],
  providers: [Stress23Service],
})
export class Stress23Module {}
