import { Module } from '@nestjs/common';
import { Stress55Controller } from './stress-55.controller';
import { Stress55Service } from './stress-55.service';

@Module({
  controllers: [Stress55Controller],
  providers: [Stress55Service],
})
export class Stress55Module {}
