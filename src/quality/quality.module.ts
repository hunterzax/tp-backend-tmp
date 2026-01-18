import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { QualityEvaluationController } from './quality-evaluation.controller';
import { QualityPlanningController } from './quality-planning.controller';
import { TariffController } from './tariff.controller';
import { QualityEvaluationService } from './quality-evaluation.service';
import { QualityPlanningService } from './quality-planning.service';
import { TariffService } from './tariff.service';

@Module({
  controllers: [QualityEvaluationController, QualityPlanningController, TariffController],
  providers: [QualityEvaluationService, QualityPlanningService, TariffService, PrismaService],
})
export class QualityModule {}
