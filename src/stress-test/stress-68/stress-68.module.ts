import { Module } from '@nestjs/common';
import { Stress68Controller } from './stress-68.controller';
import { Stress68Service } from './stress-68.service';

@Module({
  controllers: [Stress68Controller],
  providers: [Stress68Service],
})
export class Stress68Module {}
