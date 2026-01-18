import { Module } from '@nestjs/common';
import { Stress84Controller } from './stress-84.controller';
import { Stress84Service } from './stress-84.service';

@Module({
  controllers: [Stress84Controller],
  providers: [Stress84Service],
})
export class Stress84Module {}
