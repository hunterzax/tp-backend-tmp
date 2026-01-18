import { Module } from '@nestjs/common';
import { Stress58Controller } from './stress-58.controller';
import { Stress58Service } from './stress-58.service';

@Module({
  controllers: [Stress58Controller],
  providers: [Stress58Service],
})
export class Stress58Module {}
