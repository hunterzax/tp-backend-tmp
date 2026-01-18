import { Module } from '@nestjs/common';
import { Stress97Controller } from './stress-97.controller';
import { Stress97Service } from './stress-97.service';

@Module({
  controllers: [Stress97Controller],
  providers: [Stress97Service],
})
export class Stress97Module {}
