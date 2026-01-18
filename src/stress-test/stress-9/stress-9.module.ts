import { Module } from '@nestjs/common';
import { Stress9Controller } from './stress-9.controller';
import { Stress9Service } from './stress-9.service';

@Module({
  controllers: [Stress9Controller],
  providers: [Stress9Service],
})
export class Stress9Module {}
