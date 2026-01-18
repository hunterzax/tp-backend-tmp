import { Module } from '@nestjs/common';
import { Stress34Controller } from './stress-34.controller';
import { Stress34Service } from './stress-34.service';

@Module({
  controllers: [Stress34Controller],
  providers: [Stress34Service],
})
export class Stress34Module {}
