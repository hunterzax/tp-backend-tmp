import { Module } from '@nestjs/common';
import { Stress25Controller } from './stress-25.controller';
import { Stress25Service } from './stress-25.service';

@Module({
  controllers: [Stress25Controller],
  providers: [Stress25Service],
})
export class Stress25Module {}
