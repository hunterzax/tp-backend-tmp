import { Module } from '@nestjs/common';
import { Stress88Controller } from './stress-88.controller';
import { Stress88Service } from './stress-88.service';

@Module({
  controllers: [Stress88Controller],
  providers: [Stress88Service],
})
export class Stress88Module {}
