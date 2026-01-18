import { Module } from '@nestjs/common';
import { Stress18Controller } from './stress-18.controller';
import { Stress18Service } from './stress-18.service';

@Module({
  controllers: [Stress18Controller],
  providers: [Stress18Service],
})
export class Stress18Module {}
