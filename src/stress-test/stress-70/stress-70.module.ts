import { Module } from '@nestjs/common';
import { Stress70Controller } from './stress-70.controller';
import { Stress70Service } from './stress-70.service';

@Module({
  controllers: [Stress70Controller],
  providers: [Stress70Service],
})
export class Stress70Module {}
