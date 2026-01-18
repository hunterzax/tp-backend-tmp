import { Module } from '@nestjs/common';
import { Stress54Controller } from './stress-54.controller';
import { Stress54Service } from './stress-54.service';

@Module({
  controllers: [Stress54Controller],
  providers: [Stress54Service],
})
export class Stress54Module {}
