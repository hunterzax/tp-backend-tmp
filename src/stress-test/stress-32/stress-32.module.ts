import { Module } from '@nestjs/common';
import { Stress32Controller } from './stress-32.controller';
import { Stress32Service } from './stress-32.service';

@Module({
  controllers: [Stress32Controller],
  providers: [Stress32Service],
})
export class Stress32Module {}
