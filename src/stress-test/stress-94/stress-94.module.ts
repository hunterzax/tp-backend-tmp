import { Module } from '@nestjs/common';
import { Stress94Controller } from './stress-94.controller';
import { Stress94Service } from './stress-94.service';

@Module({
  controllers: [Stress94Controller],
  providers: [Stress94Service],
})
export class Stress94Module {}
