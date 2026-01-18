import { Module } from '@nestjs/common';
import { Stress35Controller } from './stress-35.controller';
import { Stress35Service } from './stress-35.service';

@Module({
  controllers: [Stress35Controller],
  providers: [Stress35Service],
})
export class Stress35Module {}
