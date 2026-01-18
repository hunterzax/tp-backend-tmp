import { Module } from '@nestjs/common';
import { Stress59Controller } from './stress-59.controller';
import { Stress59Service } from './stress-59.service';

@Module({
  controllers: [Stress59Controller],
  providers: [Stress59Service],
})
export class Stress59Module {}
