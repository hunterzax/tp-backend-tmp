import { Module } from '@nestjs/common';
import { Stress36Controller } from './stress-36.controller';
import { Stress36Service } from './stress-36.service';

@Module({
  controllers: [Stress36Controller],
  providers: [Stress36Service],
})
export class Stress36Module {}
