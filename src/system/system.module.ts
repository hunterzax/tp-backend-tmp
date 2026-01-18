import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { EventController } from './event.controller';
import { NewpointController } from './newpoint.controller';
import { OtherServiceController } from './other-service.controller';
import { EventService } from './event.service';
import { NewpointService } from './newpoint.service';
import { OtherServiceService } from './other-service.service';

@Module({
  controllers: [EventController, NewpointController, OtherServiceController],
  providers: [EventService, NewpointService, OtherServiceService, PrismaService],
})
export class SystemModule {}
