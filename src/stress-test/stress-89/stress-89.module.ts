import { Module } from '@nestjs/common';
import { Stress89Controller } from './stress-89.controller';
import { Stress89Service } from './stress-89.service';

@Module({
  controllers: [Stress89Controller],
  providers: [Stress89Service],
})
export class Stress89Module {}
