import { Module } from '@nestjs/common';
import { Stress33Controller } from './stress-33.controller';
import { Stress33Service } from './stress-33.service';

@Module({
  controllers: [Stress33Controller],
  providers: [Stress33Service],
})
export class Stress33Module {}
