import { Module } from '@nestjs/common';
import { Stress11Controller } from './stress-11.controller';
import { Stress11Service } from './stress-11.service';

@Module({
  controllers: [Stress11Controller],
  providers: [Stress11Service],
})
export class Stress11Module {}
