import { Module } from '@nestjs/common';
import { Stress57Controller } from './stress-57.controller';
import { Stress57Service } from './stress-57.service';

@Module({
  controllers: [Stress57Controller],
  providers: [Stress57Service],
})
export class Stress57Module {}
