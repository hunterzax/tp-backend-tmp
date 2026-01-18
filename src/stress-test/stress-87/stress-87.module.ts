import { Module } from '@nestjs/common';
import { Stress87Controller } from './stress-87.controller';
import { Stress87Service } from './stress-87.service';

@Module({
  controllers: [Stress87Controller],
  providers: [Stress87Service],
})
export class Stress87Module {}
