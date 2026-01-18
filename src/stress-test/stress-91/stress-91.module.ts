import { Module } from '@nestjs/common';
import { Stress91Controller } from './stress-91.controller';
import { Stress91Service } from './stress-91.service';

@Module({
  controllers: [Stress91Controller],
  providers: [Stress91Service],
})
export class Stress91Module {}
