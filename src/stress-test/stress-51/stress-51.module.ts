import { Module } from '@nestjs/common';
import { Stress51Controller } from './stress-51.controller';
import { Stress51Service } from './stress-51.service';

@Module({
  controllers: [Stress51Controller],
  providers: [Stress51Service],
})
export class Stress51Module {}
