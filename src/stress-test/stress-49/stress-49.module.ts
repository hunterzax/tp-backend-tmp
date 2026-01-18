import { Module } from '@nestjs/common';
import { Stress49Controller } from './stress-49.controller';
import { Stress49Service } from './stress-49.service';

@Module({
  controllers: [Stress49Controller],
  providers: [Stress49Service],
})
export class Stress49Module {}
