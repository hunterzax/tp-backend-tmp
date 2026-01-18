import { Module } from '@nestjs/common';
import { Stress80Controller } from './stress-80.controller';
import { Stress80Service } from './stress-80.service';

@Module({
  controllers: [Stress80Controller],
  providers: [Stress80Service],
})
export class Stress80Module {}
