import { Module } from '@nestjs/common';
import { Stress76Controller } from './stress-76.controller';
import { Stress76Service } from './stress-76.service';

@Module({
  controllers: [Stress76Controller],
  providers: [Stress76Service],
})
export class Stress76Module {}
