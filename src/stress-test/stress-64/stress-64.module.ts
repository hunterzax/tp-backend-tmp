import { Module } from '@nestjs/common';
import { Stress64Controller } from './stress-64.controller';
import { Stress64Service } from './stress-64.service';

@Module({
  controllers: [Stress64Controller],
  providers: [Stress64Service],
})
export class Stress64Module {}
