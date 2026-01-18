import { Module } from '@nestjs/common';
import { Stress15Controller } from './stress-15.controller';
import { Stress15Service } from './stress-15.service';

@Module({
  controllers: [Stress15Controller],
  providers: [Stress15Service],
})
export class Stress15Module {}
