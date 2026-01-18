import { Module } from '@nestjs/common';
import { Stress48Controller } from './stress-48.controller';
import { Stress48Service } from './stress-48.service';

@Module({
  controllers: [Stress48Controller],
  providers: [Stress48Service],
})
export class Stress48Module {}
