import { Module } from '@nestjs/common';
import { Stress67Controller } from './stress-67.controller';
import { Stress67Service } from './stress-67.service';

@Module({
  controllers: [Stress67Controller],
  providers: [Stress67Service],
})
export class Stress67Module {}
