import { Module } from '@nestjs/common';
import { Stress17Controller } from './stress-17.controller';
import { Stress17Service } from './stress-17.service';

@Module({
  controllers: [Stress17Controller],
  providers: [Stress17Service],
})
export class Stress17Module {}
