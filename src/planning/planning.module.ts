import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { NominationDashboardController } from './nomination-dashboard.controller';
import { PlanningDashboardController } from './planning-dashboard.controller';
import { PlanningFileSubmissionTemplateController } from './planning-file-submission-template.controller';
import { PlanningSubmissionFileController } from './planning-submission-file.controller';
import { QueryShipperNominationFileController } from './query-shipper-nomination-file.controller';
import { QueryShipperPlanningFileController } from './query-shipper-planning-file.controller';
import { SummaryNominationReportController } from './summary-nomination-report.controller';
import { NominationDashboardService } from './nomination-dashboard.service';
import { PlanningDashboardService } from './planning-dashboard.service';
import { PlanningFileSubmissionTemplateService } from './planning-file-submission-template.service';
import { PlanningSubmissionFileService } from './planning-submission-file.service';
import { QueryShipperNominationFileService } from './query-shipper-nomination-file.service';
import { QueryShipperPlanningFileService } from './query-shipper-planning-file.service';
import { SummaryNominationReportService } from './summary-nomination-report.service';

@Module({
  controllers: [NominationDashboardController, PlanningDashboardController, PlanningFileSubmissionTemplateController, PlanningSubmissionFileController, QueryShipperNominationFileController, QueryShipperPlanningFileController, SummaryNominationReportController],
  providers: [NominationDashboardService, PlanningDashboardService, PlanningFileSubmissionTemplateService, PlanningSubmissionFileService, QueryShipperNominationFileService, QueryShipperPlanningFileService, SummaryNominationReportService, PrismaService],
})
export class PlanningModule {}
