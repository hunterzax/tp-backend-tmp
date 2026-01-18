import { Module } from '@nestjs/common';
import { Stress65Controller } from './stress-65.controller';
import { Stress65Service } from './stress-65.service';

@Module({
  controllers: [Stress65Controller],
  providers: [Stress65Service],
})
export class Stress65Module {}
