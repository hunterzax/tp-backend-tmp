import { Module } from '@nestjs/common';
import { Stress52Controller } from './stress-52.controller';
import { Stress52Service } from './stress-52.service';

@Module({
  controllers: [Stress52Controller],
  providers: [Stress52Service],
})
export class Stress52Module {}
