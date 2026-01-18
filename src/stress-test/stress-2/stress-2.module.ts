import { Module } from '@nestjs/common';
import { Stress2Controller } from './stress-2.controller';
import { Stress2Service } from './stress-2.service';

@Module({
  controllers: [Stress2Controller],
  providers: [Stress2Service],
})
export class Stress2Module {}
