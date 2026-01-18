import { Module } from '@nestjs/common';
import { Stress46Controller } from './stress-46.controller';
import { Stress46Service } from './stress-46.service';

@Module({
  controllers: [Stress46Controller],
  providers: [Stress46Service],
})
export class Stress46Module {}
