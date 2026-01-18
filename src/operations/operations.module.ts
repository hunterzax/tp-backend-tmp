import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DailyAdjustmentController } from './daily-adjustment.controller';
import { DailyManagementController } from './daily-management.controller';
import { WeeklyManagementController } from './weekly-management.controller';
import { HvForPerationFlowAndInstructedFlowController } from './hv-for-peration-flow-and-instructed-flow.controller';
import { DailyAdjustmentService } from './daily-adjustment.service';
import { DailyManagementService } from './daily-management.service';
import { WeeklyManagementService } from './weekly-management.service';
import { HvForPerationFlowAndInstructedFlowService } from './hv-for-peration-flow-and-instructed-flow.service';

@Module({
  controllers: [DailyAdjustmentController, DailyManagementController, WeeklyManagementController, HvForPerationFlowAndInstructedFlowController],
  providers: [DailyAdjustmentService, DailyManagementService, WeeklyManagementService, HvForPerationFlowAndInstructedFlowService, PrismaService],
})
export class OperationsModule {}
