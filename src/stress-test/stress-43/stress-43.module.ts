import { Module } from '@nestjs/common';
import { Stress43Controller } from './stress-43.controller';
import { Stress43Service } from './stress-43.service';

@Module({
  controllers: [Stress43Controller],
  providers: [Stress43Service],
})
export class Stress43Module {}
