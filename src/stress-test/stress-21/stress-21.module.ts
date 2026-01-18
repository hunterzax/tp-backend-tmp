import { Module } from '@nestjs/common';
import { Stress21Controller } from './stress-21.controller';
import { Stress21Service } from './stress-21.service';

@Module({
  controllers: [Stress21Controller],
  providers: [Stress21Service],
})
export class Stress21Module {}
