import { Module } from '@nestjs/common';
import { Stress13Controller } from './stress-13.controller';
import { Stress13Service } from './stress-13.service';

@Module({
  controllers: [Stress13Controller],
  providers: [Stress13Service],
})
export class Stress13Module {}
