import { Module } from '@nestjs/common';
import { Stress7Controller } from './stress-7.controller';
import { Stress7Service } from './stress-7.service';

@Module({
  controllers: [Stress7Controller],
  providers: [Stress7Service],
})
export class Stress7Module {}
