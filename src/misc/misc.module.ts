import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BulletinBoardController } from './bulletin-board.controller';
import { MinimumInventorySummaryController } from './minimum-inventory-summary.controller';
import { PathManagementController } from './path-management.controller';
import { ReserveBalancingGasContractController } from './reserve-balancing-gas-contract.controller';
import { WaitingListController } from './waiting-list.controller';
import { BulletinBoardService } from './bulletin-board.service';
import { MinimumInventorySummaryService } from './minimum-inventory-summary.service';
import { PathManagementService } from './path-management.service';
import { ReserveBalancingGasContractService } from './reserve-balancing-gas-contract.service';
import { WaitingListService } from './waiting-list.service';

@Module({
  controllers: [BulletinBoardController, MinimumInventorySummaryController, PathManagementController, ReserveBalancingGasContractController, WaitingListController],
  providers: [BulletinBoardService, MinimumInventorySummaryService, PathManagementService, ReserveBalancingGasContractService, WaitingListService, PrismaService],
})
export class MiscModule {}
