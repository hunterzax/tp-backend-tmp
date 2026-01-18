import { Module } from '@nestjs/common';
import { Stress19Controller } from './stress-19.controller';
import { Stress19Service } from './stress-19.service';

@Module({
  controllers: [Stress19Controller],
  providers: [Stress19Service],
})
export class Stress19Module {}
