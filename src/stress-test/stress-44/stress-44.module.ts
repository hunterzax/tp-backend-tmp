import { Module } from '@nestjs/common';
import { Stress44Controller } from './stress-44.controller';
import { Stress44Service } from './stress-44.service';

@Module({
  controllers: [Stress44Controller],
  providers: [Stress44Service],
})
export class Stress44Module {}
