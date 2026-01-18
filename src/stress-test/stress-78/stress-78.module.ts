import { Module } from '@nestjs/common';
import { Stress78Controller } from './stress-78.controller';
import { Stress78Service } from './stress-78.service';

@Module({
  controllers: [Stress78Controller],
  providers: [Stress78Service],
})
export class Stress78Module {}
