import { Module } from '@nestjs/common';
import { Stress77Controller } from './stress-77.controller';
import { Stress77Service } from './stress-77.service';

@Module({
  controllers: [Stress77Controller],
  providers: [Stress77Service],
})
export class Stress77Module {}
