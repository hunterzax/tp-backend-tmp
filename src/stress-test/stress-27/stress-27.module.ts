import { Module } from '@nestjs/common';
import { Stress27Controller } from './stress-27.controller';
import { Stress27Service } from './stress-27.service';

@Module({
  controllers: [Stress27Controller],
  providers: [Stress27Service],
})
export class Stress27Module {}
