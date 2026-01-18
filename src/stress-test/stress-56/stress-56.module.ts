import { Module } from '@nestjs/common';
import { Stress56Controller } from './stress-56.controller';
import { Stress56Service } from './stress-56.service';

@Module({
  controllers: [Stress56Controller],
  providers: [Stress56Service],
})
export class Stress56Module {}
