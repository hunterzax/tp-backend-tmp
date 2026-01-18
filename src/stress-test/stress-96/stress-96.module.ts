import { Module } from '@nestjs/common';
import { Stress96Controller } from './stress-96.controller';
import { Stress96Service } from './stress-96.service';

@Module({
  controllers: [Stress96Controller],
  providers: [Stress96Service],
})
export class Stress96Module {}
