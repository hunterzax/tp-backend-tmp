import { Module } from '@nestjs/common';
import { Stress10Controller } from './stress-10.controller';
import { Stress10Service } from './stress-10.service';

@Module({
  controllers: [Stress10Controller],
  providers: [Stress10Service],
})
export class Stress10Module {}
