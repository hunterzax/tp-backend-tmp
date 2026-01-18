import { Module } from '@nestjs/common';
import { Stress24Controller } from './stress-24.controller';
import { Stress24Service } from './stress-24.service';

@Module({
  controllers: [Stress24Controller],
  providers: [Stress24Service],
})
export class Stress24Module {}
