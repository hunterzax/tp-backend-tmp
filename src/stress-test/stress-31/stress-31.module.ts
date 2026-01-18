import { Module } from '@nestjs/common';
import { Stress31Controller } from './stress-31.controller';
import { Stress31Service } from './stress-31.service';

@Module({
  controllers: [Stress31Controller],
  providers: [Stress31Service],
})
export class Stress31Module {}
