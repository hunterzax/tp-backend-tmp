import { Module } from '@nestjs/common';
import { Stress50Controller } from './stress-50.controller';
import { Stress50Service } from './stress-50.service';

@Module({
  controllers: [Stress50Controller],
  providers: [Stress50Service],
})
export class Stress50Module {}
