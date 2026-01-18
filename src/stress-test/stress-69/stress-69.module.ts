import { Module } from '@nestjs/common';
import { Stress69Controller } from './stress-69.controller';
import { Stress69Service } from './stress-69.service';

@Module({
  controllers: [Stress69Controller],
  providers: [Stress69Service],
})
export class Stress69Module {}
