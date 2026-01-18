import { Module } from '@nestjs/common';
import { AllocationController } from './allocation.controller';
import { AllocationService } from './allocation.service';
import { PrismaService } from '../prisma.service';

import { AllocationModeController } from './allocation-mode.controller';
import { BalancingController } from './balancing.controller';
import { ParkingAllocationController } from './parking-allocation.controller';
import { CurrentAllocationController } from './current-allocation.controller';
import { AllocationModeService } from './allocation-mode.service';
import { BalancingService } from './balancing.service';
import { ParkingAllocationService } from './parking-allocation.service';
import { CurrentAllocationService } from './current-allocation.service';

@Module({
    controllers: [
        AllocationController,
        AllocationModeController,
        BalancingController,
        ParkingAllocationController,
        CurrentAllocationController
    ],
    providers: [
        AllocationService,
        PrismaService,
        AllocationModeService,
        BalancingService,
        ParkingAllocationService,
        CurrentAllocationService
    ],
    exports: [AllocationService],
})
export class AllocationModule { }
