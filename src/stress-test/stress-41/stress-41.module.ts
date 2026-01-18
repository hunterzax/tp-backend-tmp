import { Module } from '@nestjs/common';
import { Stress41Controller } from './stress-41.controller';
import { Stress41Service } from './stress-41.service';

@Module({
  controllers: [Stress41Controller],
  providers: [Stress41Service],
})
export class Stress41Module {}
