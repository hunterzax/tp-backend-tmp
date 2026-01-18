import { Module } from '@nestjs/common';
import { Stress81Controller } from './stress-81.controller';
import { Stress81Service } from './stress-81.service';

@Module({
  controllers: [Stress81Controller],
  providers: [Stress81Service],
})
export class Stress81Module {}
