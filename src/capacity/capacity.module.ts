import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CapacityController } from './capacity.controller';
import { CapacityDashboardController } from './capacity-dashboard.controller';
import { CapacityPublicationController } from './capacity-publication.controller';
import { CapacityV2Controller } from './capacity-v2.controller';
import { ReleaseCapacityManagementController } from './release-capacity-management.controller';
import { ReleaseCapacitySubmissionController } from './release-capacity-submission.controller';
import { ReleaseUioliSummaryManagementController } from './release-uioli-summary-management.controller';
import { UseItOrLoseItController } from './use-it-or-lose-it.controller';
import { CapacityService } from './capacity.service';
import { CapacityDashboardService } from './capacity-dashboard.service';
import { CapacityPublicationService } from './capacity-publication.service';
import { CapacityV2Service } from './capacity-v2.service';
import { ReleaseCapacityManagementService } from './release-capacity-management.service';
import { ReleaseCapacitySubmissionService } from './release-capacity-submission.service';
import { ReleaseUioliSummaryManagementService } from './release-uioli-summary-management.service';
import { UseItOrLoseItService } from './use-it-or-lose-it.service';

@Module({
  controllers: [CapacityController, CapacityDashboardController, CapacityPublicationController, CapacityV2Controller, ReleaseCapacityManagementController, ReleaseCapacitySubmissionController, ReleaseUioliSummaryManagementController, UseItOrLoseItController],
  providers: [CapacityService, CapacityDashboardService, CapacityPublicationService, CapacityV2Service, ReleaseCapacityManagementService, ReleaseCapacitySubmissionService, ReleaseUioliSummaryManagementService, UseItOrLoseItService, PrismaService],
})
export class CapacityModule {}
