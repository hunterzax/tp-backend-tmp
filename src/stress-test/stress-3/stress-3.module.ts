import { Module } from '@nestjs/common';
import { Stress3Controller } from './stress-3.controller';
import { Stress3Service } from './stress-3.service';

@Module({
  controllers: [Stress3Controller],
  providers: [Stress3Service],
})
export class Stress3Module {}
